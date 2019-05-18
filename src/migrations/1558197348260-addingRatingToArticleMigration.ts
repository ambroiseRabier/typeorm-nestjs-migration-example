import {MigrationInterface, QueryRunner} from "typeorm";

export class addingRatingToArticleMigration1558197348260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "article" ADD "rating" integer NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "rating"`);
    }

}
