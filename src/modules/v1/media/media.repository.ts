import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Pagination } from 'nestjs-typeorm-paginate/dist/pagination';
import MediaEntity from './schemas/media.entity';
import UpdateMediaDto from './dto/update-media.dto';
import { ICreateMedia } from './interfaces/media.interface';

@Injectable()
export default class MediaRepository {
  constructor(
    @InjectRepository(MediaEntity)
    private readonly mediaModel: Repository<MediaEntity>,
  ) {}

  public getAllMedia(
    options: IPaginationOptions,
    query?: any,
  ): Promise<Pagination<MediaEntity>> {
    return paginate<MediaEntity>(this.mediaModel, options, { ...query });
  }

  public async create(createMediaDto: ICreateMedia): Promise<MediaEntity> {
    return this.mediaModel.save(createMediaDto);
  }

  public async update(id: string, updateMediaDto: UpdateMediaDto): Promise<UpdateResult> {
    return this.mediaModel.update(id, updateMediaDto);
  }

  public async findOne(id: string): Promise<MediaEntity | void> {
    return this.mediaModel.findOne(id);
  }

  public async delete(id: string): Promise<UpdateResult> {
    return this.mediaModel.softDelete(id);
  }

  public async search(query: string): Promise<MediaEntity[] | []> {
    return this.mediaModel.createQueryBuilder().where(query).getMany();
  }
}
