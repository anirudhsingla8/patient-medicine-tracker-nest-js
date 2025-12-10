import { Module } from '@nestjs/common';
import { ImageUploadService } from './services/image-upload.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    providers: [ImageUploadService],
    exports: [ImageUploadService],
})
export class CommonModule { }
