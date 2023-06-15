import { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";


export function Exercises(){

    const [name, setName] = useState('Initial Text');
    const [desc, setDesc] = useState('Initial Text');
    const [muscle, setMuscle] = useState('Initial Text');
    const [id, setId] = useState(0);
    async function getWger(){
        const repose = await fetch("https://wger.de/api/v2/exercise/?name=Biceps Curls With Barbell");  
        const jsonData = await repose.json();
        setName(jsonData.results[0].name);
        setDesc(jsonData.results[0].description);
        setId(jsonData.results[0].id);
        const num = jsonData.results[0].muscles[0].id;
        console.log(num);
        const muscleNum = await fetch("https://wger.de/api/v2/muscle/?id=${num}");
        const jsonMuscle = await muscleNum.json();
        setMuscle(jsonMuscle.results[0].name_en);
        console.log(jsonMuscle.results[0].name_en);   
    }
    if (name === 'Initial Text') {
        return(
            <>
             <button onClick={getWger}>Get an Example Workout</button>
            </>
        )
      }
    
    return(
        <>
            <h1>Exercise</h1> 
                <ExerciseCard muscle={muscle} name={name} desc={desc} id={id}></ExerciseCard>
        </>
    )
}
export default Exercises;