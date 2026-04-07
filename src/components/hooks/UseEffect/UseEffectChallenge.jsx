import { useEffect, useState } from "react"
import "./index.css"

export const UseEffectChallenge = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    // title change by using useEffect hook
    useEffect(() => {
        document.title = `count is ${count}`;
    }, [count])
    
    // dynamic name change by using useEffect hook
    useEffect(() => {
        console.log(name);
    }, [name])
    
    return (
        <div className="container effect-container">
            <h1>UseEffect Challenge</h1>

            <p>count <span>{count}</span></p>
            <button onClick={() => setCount(count + 1)}>increament</button>

            <p>
                name is - <span>{name}</span>
            </p>

            {/* <input type="text" /> --> now it is uncontrolled if we add value={} and onChange() attribute then it becomes controlled */}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}


