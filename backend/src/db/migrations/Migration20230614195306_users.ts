import { Migration } from '@mikro-orm/migrations';

export class Migration20230614195306 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "exercise" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) null, "name" varchar(255) not null, "desc" varchar(255) not null, "muscle" varchar(255) not null, "reps" int not null, "sets" int not null, "weight" int not null, "effort" int not null);');

    this.addSql('create table "users" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) null, "email" varchar(255) not null, "name" varchar(255) not null, "password" varchar(255) not null, "role" text check ("role" in (\'Admin\', \'User\')) not null);');
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');

    this.addSql('create table "workout" ("id" serial primary key, "owner" varchar(255) not null, "name" varchar(255) not null, "desc" varchar(255) not null, "type" varchar(255) not null, "effort" int not null);');

    this.addSql('create table "workout_exer_list" ("workout_id" int not null, "exercise_id" int not null, constraint "workout_exer_list_pkey" primary key ("workout_id", "exercise_id"));');

    this.addSql('alter table "workout_exer_list" add constraint "workout_exer_list_workout_id_foreign" foreign key ("workout_id") references "workout" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "workout_exer_list" add constraint "workout_exer_list_exercise_id_foreign" foreign key ("exercise_id") references "exercise" ("id") on update cascade on delete cascade;');
  }

}
