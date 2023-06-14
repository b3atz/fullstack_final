import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "exercise"})
export class Exercise {
    @PrimaryKey()
    id!: number;
    
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