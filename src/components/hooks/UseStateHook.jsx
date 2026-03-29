import { useState } from "react"

export const UseStateHook = () => {
    const [value, SetValue] = useState(0)
    console.log(value);
    return (
        <div className="container">
            <h1>Use State Hook</h1>
            <p>count {value} </p>
            <button onClick={()=> SetValue(value + 1)}>increament</button>
        </div>
    )
}
