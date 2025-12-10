import { ConfigService } from '@nestjs/config';
export declare class ImageUploadService {
    private configService;
    constructor(configService: ConfigService);
    uploadImage(file: Express.Multer.File): Promise<string>;
}
