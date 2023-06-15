import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import { Exercise } from "./Exercise.js";
import type { Rel } from "@mikro-orm/core"
import { User } from "./User.js";

export enum split{
    PUSH = 'push',
    PULL = 'pull',
    LEGS = 'legs'
}
@Entity({ tableName: "workout"})
export class Workout {
    @PrimaryKey()
    id!:number;

    @ManyToOne()
    owner!: Rel<User>;

    @Property()
    name:string;

    @Property()
    desc: string;

    @Property()
    type: split;
    
    @ManyToMany(
		() => Exercise)
	exerList!: Collection<Exercise>;

    @Property()
    effort: number;
}