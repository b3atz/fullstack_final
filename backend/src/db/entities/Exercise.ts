import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { DoggrBaseEntity } from "./DoggrBaseEntity.js";

@Entity({ tableName: "exercise"})
export class Exercise extends DoggrBaseEntity {
    
    @Property()
    name: string;

    @Property()
    desc: string;

    @Property()
    muscle: string;
    
    @Property()
    reps: number;

    @Property()
    sets: number;

    @Property()
    weight: number;

    @Property()
    effort: number;
}