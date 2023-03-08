import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

import RoleEntity from '@v1/roles/schemas/role.entity';
import UserEntity from '@v1/users/schemas/user.entity';
import MediaEntity from '@v1/media/schemas/media.entity';

export default class AddDefaultRelations1656921627771
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const roles = await queryRunner.manager.find(RoleEntity);
    const users = await getRepository(UserEntity).find();
    const media = await queryRunner.manager.find(MediaEntity);
    users.forEach(async (user, index) => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('users_roles')
        .values([{ usersId: user.id, rolesId: roles[index].id }])
        .execute();
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('users_media')
        .values([{ mediaId: media[index].id, usersId: user.id }])
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('users_roles')
      .execute();
  }
}
