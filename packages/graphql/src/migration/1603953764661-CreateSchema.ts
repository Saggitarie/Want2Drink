import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSchema1603953764661 implements MigrationInterface {
    name = 'CreateSchema1603953764661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "drinking_location" ("id" SERIAL NOT NULL, "locationName" character varying(100) NOT NULL, "longitude" double precision NOT NULL, "latitude" double precision NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" integer, CONSTRAINT "PK_a93d3e41d4631334a7fe4c5e05c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "drinking_location" ADD CONSTRAINT "FK_a64cfcae9365942b7d71c1ab9be" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drinking_location" DROP CONSTRAINT "FK_a64cfcae9365942b7d71c1ab9be"`);
        await queryRunner.query(`DROP TABLE "drinking_location"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
