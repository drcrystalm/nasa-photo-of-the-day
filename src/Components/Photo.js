import React from "react"

function Photo(props) {
    console.log(props.photo)
    return <img alt='' src={props.photo} />
}

export default Photo
