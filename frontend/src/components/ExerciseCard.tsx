import { Card, Button } from "react-bootstrap";
import HTMLRenderer from "./HTMLRenderer";
import { ExerciseService } from "../service/exerciseClient";


interface exer{
    name:string,
    desc:string,
    muscle:string,
    id: number
}

export function ExerciseCard(props:exer) {
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text><HTMLRenderer html={props.desc} /></Card.Text>
                <Button variant="primar" onClick={() => ExerciseService.send(props.name,props.desc,props.muscle)}>Send to Database</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default ExerciseCard;