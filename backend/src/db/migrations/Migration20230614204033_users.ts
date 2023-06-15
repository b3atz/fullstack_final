import { Migration } from '@mikro-orm/migrations';

export class Migration20230614204033 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "workout" add column "owner_id" int not null;');
    this.addSql('alter table "workout" add constraint "workout_owner_id_foreign" foreign key ("owner_id") references "users" ("id") on update cascade;');
    this.addSql('alter table "workout" drop column "owner";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "workout" drop constraint "workout_owner_id_foreign";');

    this.addSql('alter table "workout" add column "owner" varchar(255) not null;');
    this.addSql('alter table "workout" drop column "owner_id";');
  }

}
