"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = __importStar(require("nodemailer"));
const googleapis_1 = require("googleapis");
let MailService = MailService_1 = class MailService {
    configService;
    transporter;
    logger = new common_1.Logger(MailService_1.name);
    constructor(configService) {
        this.configService = configService;
    }
    onModuleInit() {
        this.createTransporter();
    }
    async createTransporter() {
        try {
            const OAuth2 = googleapis_1.google.auth.OAuth2;
            const oauth2Client = new OAuth2(this.configService.get('OAUTH_CLIENT_ID'), this.configService.get('OAUTH_CLIENT_SECRET'), 'https://developers.google.com/oauthplayground');
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
                    accessToken: accessToken,
                },
            });
            this.logger.log('Mail transporter created successfully');
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            this.logger.error('Failed to create mail transporter: ' + errorMessage);
            if (error.response) {
                this.logger.error('Error response:', JSON.stringify(error.response.data));
            }
        }
    }
    async sendPasswordResetEmail(email, token) {
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
};
exports.MailService = MailService;
exports.MailService = MailService = MailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map