import { Entity, Property, Unique } from "@mikro-orm/core";
import { SoftDeletable } from "mikro-orm-soft-delete";
import { DoggrBaseEntity } from "./DoggrBaseEntity.js";
import { Enum } from "@mikro-orm/core";

export enum UserRole {
	ADMIN = 'Admin',
	USER = 'User'
}

// https://github.com/TheNightmareX/mikro-orm-soft-delete
// Yes, it's really that easy.
@SoftDeletable(() => User, "deleted_at", () => new Date())
@Entity({ tableName: "users"})
export class User extends DoggrBaseEntity {
	@Property()
	@Unique()
	email!: string;
	
	@Property()
	name!: string

	@Property()
	password!: string;

	@Enum(() => UserRole)
	role!: UserRole; // string enum
}
