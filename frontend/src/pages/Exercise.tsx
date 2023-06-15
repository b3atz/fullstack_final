async function getWger(){
    const repose = await fetch("https://wger.de/api/v2/exercise/?name=Biceps Curls With Barbell");  
    const jsonData = await repose.json();

    console.log(jsonData.results[0].id);
}
export function Exercises(){
    

    return(
        <>
            <h1>Exercise</h1> 
            <button onClick={getWger}></button>
        </>
    )
}
export default Exercises;