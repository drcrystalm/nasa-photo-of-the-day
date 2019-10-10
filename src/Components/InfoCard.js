import React from "react"

const InfoCard = props => {
    return (
        <div className='data-list' key={props.index}>
            <img alt='' src={props.photo} />

            <h2>Title: {props.title}</h2>
            <p>{props.media_type}</p>
            <p>Date: {props.date}</p>
            {/* <p>This looks important => {props.hdurl}</p> */}
            <p>{props.explanation}</p>
        </div>
    )
}

export default InfoCard
