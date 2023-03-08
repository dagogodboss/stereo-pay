import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  ManyToMany,
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  JoinTable,
} from 'typeorm';
import UserEntity from '@v1/users/schemas/user.entity';
import AbstractEntity from 'src/common/abstract/abstract.entity';
import { MediaStatus } from '../interfaces/media.interface';

@Entity('media')
export default class MediaEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  @PrimaryColumn()
  readonly id: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  readonly type: string = '';

  @ApiProperty({ type: String, maxLength: 2048 })
  @Column({ length: 2048, nullable: true })
  readonly name: string = '';

  @ApiProperty({ type: String })
  @Column({ type: 'longtext' })
  readonly description: string = '';

  @ApiProperty({ type: String })
  @Column({ type: 'text' })
  readonly url: string = '';

  @ApiProperty({ type: String })
  @Column({ type: 'enum', enum: MediaStatus, default: MediaStatus.INACTIVE })
  readonly status: MediaStatus = MediaStatus.INACTIVE;

  @ManyToMany(() => UserEntity, {
    cascade: true,
  })
  @JoinTable({
    name: 'users_media',
  })
  readonly users!: UserEntity[];
}
