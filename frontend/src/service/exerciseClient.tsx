import { httpClient } from "./HttpClient";

export const ExerciseService = {
    async send(name:string,desc:string,muscle:string){
        return httpClient.post("/exercise",{name,desc,muscle,reps: 0,sets:0,weight:0});
    }
};