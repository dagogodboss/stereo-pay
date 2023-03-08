import { Injectable } from '@nestjs/common';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import CreateMediaDto from './dto/create-media.dto';
import UpdateMediaDto from './dto/update-media.dto';
import MediaRepository from './media.repository';
import MediaEntity from './schemas/media.entity';

@Injectable()
export class MediaService {
  constructor(readonly mediaRepository: MediaRepository) {}

  async create(createMediaDto: CreateMediaDto, user: any): Promise<MediaEntity> {
    return this.mediaRepository.create({ ...createMediaDto, users: [user] });
  }

  async findOne(id: string): Promise<MediaEntity | void> {
    return this.mediaRepository.findOne(id);
  }

  async findAll(options: IPaginationOptions) {
    return this.mediaRepository.getAllMedia(options);
  }

  async searchMedia(query: string) {
    return this.mediaRepository.search(query);
  }

  async update(id: string, updateMediaDto: UpdateMediaDto) {
    return this.mediaRepository.update(id, updateMediaDto);
  }

  async delete(id: string) {
    return this.mediaRepository.delete(id);
  }
}
