import {MigrationInterface, QueryRunner} from "typeorm";

export class articleMigration1558203816137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "article" RENAME COLUMN "name" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "article" RENAME COLUMN "description" TO "name"`);
    }

}
