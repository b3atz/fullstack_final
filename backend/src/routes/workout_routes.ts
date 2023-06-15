import { FastifyInstance } from "fastify";
import { WorkoutBody, WorkoutUpdateBody } from "../types";
import { Workout, split } from "../db/entities/Workout.js";
import { Exercise } from "../db/entities/Exercise.js";
import { User } from "../db/entities/User.js";

//Routes for Workout
export function WorkoutRoutesInit(app: FastifyInstance) {
    //Get worouts
    app.get("/workout",async (req,reply) => {
        try{
            const workout = await req.em.find(Workout, {},
                {populate: [
                    "exerList"
                ]});
            return reply.send(workout);
        } catch (err){
            return reply.status(500).send(err);
        }
    });
    //Get by id
    app.get<{Body: {id: number}}>("/workout/id",async (req,reply) => {
		const { id } = req.body;
        try{
			const workout = await req.em.findOneOrFail(Workout, id, {strict: true,
                populate: [
                    "exerList"
                ]});
                return reply.send(workout);
        } catch (err){
            return reply.status(500).send(err);
        }
    });
    //Create
    app.post<{Body:WorkoutBody}>("/workout",async (req,reply) => {
        const {name,desc,type,ownerID} = req.body;
        let typeD: split;
        console.log(type);
        try{
            switch(type){
                case(1):
                    console.log(type);
                    typeD = split.PUSH;
                    break;
                case(2):
                    typeD = split.PULL;
                    break;
                case(3):
                    typeD = split.LEGS;
                    break;
                default:
                    throw("Invlaid Type")
            }
            const user = await req.em.findOneOrFail(User,{id:ownerID})
            const workout = await req.em.create(Workout, {
                name,
                desc,
                type: typeD,
                owner: user,
                effort: 0
            })
            
            await req.em.flush();
			return reply.send(workout);
        }catch(err){
			return reply.status(501).send(err);
        }

    });
    //Delete
    app.delete<{Body: {my_id: number; id_to_delete: number, password: string }}>("/worout",async (req,reply) => {

    });

    //Update
    app.put<{Body: WorkoutUpdateBody}>("/workout",async (req,reply) => {

    });
    //Add workout to exercise list
    app.put<{Body: {w_id,e_id}}>("/workoutAdd",async (req,reply) => {
        const {w_id,e_id} = req.body;

        try{
            const exercise = await req.em.findOneOrFail(Exercise, {id: e_id},{strict:true})
            const workout = await req.em.findOneOrFail(Workout, {id: w_id},{strict:true, populate: [
                "exerList"
            ]})

            workout.exerList.add(exercise);
            
            await req.em.flush();
            return reply.send(workout);
        } catch (err) {
            return reply.status(500).send(err);
        }

    });
}