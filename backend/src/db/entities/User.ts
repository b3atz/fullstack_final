import { Cascade, Collection, Entity, OneToMany, Property, Unique } from "@mikro-orm/core";
import { SoftDeletable } from "mikro-orm-soft-delete";
import { DoggrBaseEntity } from "./DoggrBaseEntity.js";
import { Enum } from "@mikro-orm/core";
import { Workout } from "./Workout.js";

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

	@OneToMany (
		() => Workout,
		workout => workout.owner,
		{cascade: [Cascade.PERSIST,Cascade.REMOVE]}
	)
	workouts!: Collection<Workout>;
}
