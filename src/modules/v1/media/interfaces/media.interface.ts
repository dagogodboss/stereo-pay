import UserEntity from '@v1/users/schemas/user.entity';
import CreateMediaDto from '../dto/create-media.dto';

export enum MediaStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum MediaType {
  IMAGE = 'image',
  AUDIO = 'audio',
}

export interface ICreateMedia extends CreateMediaDto {
  users: UserEntity[];
}
