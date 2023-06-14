export type ICreateUsersBody = {
	name: string,
	email: string,
	password: string
}
export type IUpdateUsersBody = {
	name: string;
	id: number;
}
export type ExerciseBody = {
	name: string;
	desc: string;
	muscle: string;
    reps: number;
    sets: number;
    weight: number;
}
export type ExerciseUpdateBody = {
	name: string;
	desc: string;
	muscle: string;
    reps: number;
    sets: number;
    weight: number;
	effort: number;
}
export type WorkoutBody = {
	ownerID: number;
    name:string;
	desc: string;
    type: number;
}
export type WorkoutUpdateBody = {
	name:string;
	desc: string;
    type: number;
	effort: number;
}
