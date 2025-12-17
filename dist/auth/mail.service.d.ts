import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class MailService implements OnModuleInit {
    private configService;
    private transporter;
    private readonly logger;
    constructor(configService: ConfigService);
    onModuleInit(): void;
    private createTransporter;
    sendPasswordResetEmail(email: string, token: string): Promise<void>;
}
