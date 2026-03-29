import { useState } from "react"

export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <Inputcomponent inputValue={inputValue} setInputValue={setInputValue} />
            <Onputcomponent inputValue={inputValue} />
        </div>
    )
}

const Inputcomponent = ({ inputValue, setInputValue }) => {
    // const [inputValue, setInputValue] = useState("");
    return (
        <>
            <input type="text" placeholder="Enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

        </>
    )
}

const Onputcomponent = ({ inputValue }) => {

    return (
        <>
            <p>the current value is {inputValue}</p>
        </>
    )
}


