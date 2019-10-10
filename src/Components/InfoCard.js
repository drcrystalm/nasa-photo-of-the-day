import React from "react"
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardFooter,
} from "reactstrap"

const InfoCard = props => {
    return (
        <Card className='try' key={props.index}>
            <CardBody className='try'>
                <Button color='warning'>Hit Me</Button>
                <CardImg src={props.imgUrl} alt='' />
                <CardTitle className='text-primary'>{props.title}</CardTitle>
                {/* <CardText>{props.description}</CardText> */}
                <CardSubtitle>Date: {props.date} </CardSubtitle>
                <CardSubtitle className='text-info'>
                    {props.explanation}
                </CardSubtitle>
            </CardBody>
            <CardFooter>Made By Crystal Martin</CardFooter>
        </Card>
    )
}

export default InfoCard
