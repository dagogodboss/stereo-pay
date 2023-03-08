import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import MediaRepository from './media.repository';
import MediaEntity from './schemas/media.entity';
import AuthModule from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([MediaEntity]), AuthModule, ConfigModule],
  controllers: [MediaController],
  providers: [MediaService, MediaRepository],
  exports: [MediaService, MediaRepository],
})
export class MediaModule {}
