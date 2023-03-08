import {
  Entity,
  Column,
  Index,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import RoleEntity from '@v1/roles/schemas/role.entity';
import AbstractEntity from '../../../../common/abstract/abstract.entity';

@Entity('users')
export default class UserEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  @PrimaryColumn()
  readonly id: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  readonly password: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  readonly email: string = '';

  @ApiProperty({ type: String, maxLength: 2048 })
  @Column({ length: 2048, nullable: true })
  readonly name: string = '';

  @ApiProperty({ type: Boolean })
  @Column({ type: 'tinyint' })
  readonly verified: boolean = false;

  @ManyToMany(() => RoleEntity, {
    cascade: true,
  })
  @JoinTable({
    name: 'users_roles',
  })
  roles!: RoleEntity[];
}
