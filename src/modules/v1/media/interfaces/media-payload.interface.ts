import UserEntity from '@v1/users/schemas/user.entity';
import { MediaType } from './media.interface';

export interface MediaPayload {
  readonly id: string;
  readonly type: MediaType;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
  readonly user: UserEntity;
}

export class MediaResponseEntity implements MediaPayload {
  id: string = '';

  type!: MediaType;

  name: string = '';

  description: string = '';

  url: string = '';

  status: string = '';

  createdAt: Date = new Date();

  updatedAt: Date = new Date();

  deletedAt: Date = new Date();

  user: UserEntity = new UserEntity();
}
