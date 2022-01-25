import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = props => {
    return (
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle tag="h4">{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price}/-</CardText>
                    <CardText>{props.dish.label}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;