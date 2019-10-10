import React from "react"
import Title from "./Components/Title"
import InfoList from "./Components/InfoList"
import "./App.css"

function App() {
    return (
        <div className='App'>
            <div className='title'>
                <Title />
            </div>
            <div className='main'>
                <InfoList />
            </div>
        </div>
    )
}

export default App
