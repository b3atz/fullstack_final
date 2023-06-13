import { Collection, Entity, ManyToMany, PrimaryKey, Property} from "@mikro-orm/core";
import { Exercise } from "./Exercise.js";

export enum split{
    PUSH = 'push',
    PULL = 'pull',
    LEGS = 'legs'
}
@Entity({ tableName: "workout"})
export class Workout {
    @PrimaryKey()
    id!:number;

    @Property()
    owner: string;

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