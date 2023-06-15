import { FastifyInstance } from "fastify";
import { ExerciseBody, ExerciseUpdateBody } from "../types";
import { Exercise } from "../db/entities/Exercise.js";

//routes for exercise
export function ExerciseRoutesInit(app: FastifyInstance) {
    //Get Exercises
    app.get("/exercise",async (req,reply) => {
        try{
            const exercises = await req.em.find(Exercise, {});
            return reply.send(exercises);
        } catch (err){
            return reply.status(500).send(err);
        }
    });
    //Get by id
    app.search<{Body: {id: number}}>("/exercise/id",async (req,reply) => {
		const { id } = req.body;

		try {
			const exercise = await req.em.findOneOrFail(Exercise, id, {strict: true});
			return reply.send(exercise);
		} catch (err) {
			return reply.status(500).send(err);
		}
    });
    //Create
    app.post<{Body:ExerciseBody}>("/exercise",async (req,reply) => {
        const {name,desc,muscle,reps,sets,weight} = req.body;
        try{
            const exercise = await req.em.create(Exercise, {
                name,
                desc,
                muscle,
                reps,
                sets,
                weight,
                effort:0
            })
			
            await req.em.flush();
			return reply.send(exercise);
        }catch(err){
			return reply.status(501).send(err);
        }
    });

//Delete
    app.delete<{Body: {my_id: number; id_to_delete: number, password: string }}>("/exercise",async (req,reply) => {

    });

//Update
    app.put<{Body: ExerciseUpdateBody}>("/exercise",async (req,reply) => {

    });
}