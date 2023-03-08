import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddDefaultMedia1656921627721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const image = {
      type: 'image',
      name: 'the best Image of a cat',
      description:
        'this image is from lorem ipsum, the sentence is an industrial place holder',
      url: 'http://www.images.com/best-image-of-cat',
    };
    const audio = {
      type: 'audio',
      name: 'Programming Anthem',
      description: 'this audio is for all programers to sing as the is recognized world wide',
      url: 'http://www.audio.com/programming-anthem',
    };
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('media')
      .values([image, audio])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('media')
      .execute();
  }
}
