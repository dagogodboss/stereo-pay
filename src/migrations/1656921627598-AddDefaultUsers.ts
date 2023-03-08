import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcryptjs';

export default class AddDefaultUsers1656921627598
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await bcrypt.hash('1234test', 10);
    const userOne = {
      name: 'Test1 User',
      password,
      email: 'test1@example.com',
      verified: true,
    };
    const userTwo = {
      name: 'Test2 User',
      password,
      email: 'test2@example.com',
      verified: true,
    };
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([userOne, userTwo])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.manager
       .createQueryBuilder()
       .delete()
       .from('users')
       .execute();
  }
}
