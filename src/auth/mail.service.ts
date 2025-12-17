import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

@Injectable()
export class MailService implements OnModuleInit {
    private transporter: nodemailer.Transporter;
    private readonly logger = new Logger(MailService.name);

    constructor(private configService: ConfigService) { }

    onModuleInit() {
        this.createTransporter();
    }

    private async createTransporter() {
        try {
            const OAuth2 = google.auth.OAuth2;
            const oauth2Client = new OAuth2(
                this.configService.get('OAUTH_CLIENT_ID'),
                this.configService.get('OAUTH_CLIENT_SECRET'),
                'https://developers.google.com/oauthplayground',
            );

            oauth2Client.setCredentials({
                refresh_token: this.configService.get('OAUTH_REFRESH_TOKEN'),
            });

            const accessToken = await new Promise((resolve, reject) => {
                oauth2Client.getAccessToken((err, token) => {
                    if (err) {
                        reject(new Error('Failed to create access token: ' + err.message));
                    }
                    resolve(token);
                });
            });

            this.transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: this.configService.get('MAIL_USER'),
                    clientId: this.configService.get('OAUTH_CLIENT_ID'),
                    clientSecret: this.configService.get('OAUTH_CLIENT_SECRET'),
                    refreshToken: this.configService.get('OAUTH_REFRESH_TOKEN'),
                    accessToken: accessToken as string,
                },
            });
            this.logger.log('Mail transporter created successfully');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            this.logger.error('Failed to create mail transporter: ' + errorMessage);
            if (error.response) {
                this.logger.error('Error response:', JSON.stringify(error.response.data));
            }
        }
    }

    async sendPasswordResetEmail(email: string, token: string) {
        if (!this.transporter) {
            this.logger.error('Mail transporter is not ready');
            throw new Error('Mail service is not available');
        }
        const resetUrl = `http://localhost:3000/reset-password?token=${token}`;
        const mailOptions = {
            from: this.configService.get('MAIL_USER'),
            to: email,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Please click the following link to reset your password: ${resetUrl}`,
            html: `<p>You requested a password reset. Please click the following link to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`,
        };

        await this.transporter.sendMail(mailOptions);
    }
}
