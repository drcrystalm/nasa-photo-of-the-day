import React, { useEffect, useState } from "react"
import axios from "axios"
import InfoCard from "./InfoCard"
import Photo from "./Photo"

export default function InfoList() {
    const [nasaData, setData] = useState([])
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
                setPhoto(response.data.url)
            })
            .catch(error => {
                console.log("no bueno", error)
            })
    }, [])

    return (
        <div>
            <p>I am on the struggle bus.</p>

            <Photo image={photo} />
            <InfoCard
                key={nasaData.index}
                title={nasaData.title}
                media_type={nasaData.media_type}
                date={nasaData.date}
                hdurl={nasaData.hdurl}
                explanation={nasaData.explanation}
            />
        </div>
    )
}
