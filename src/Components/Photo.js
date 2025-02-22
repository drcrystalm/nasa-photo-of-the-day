import React from "react"

const Photo = props => {
    return (
        <div className='nasa_card' key={props.index}>
            <img
                className='nasa_photo'
                alt='awesome space photo'
                src={props.image}
            />
        </div>
    )
}

export default Photo
