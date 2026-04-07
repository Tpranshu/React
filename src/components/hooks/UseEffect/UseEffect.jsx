import { useEffect, useState } from "react"
import "./index.css"
// export const UseEffect = () => {
//     useEffect(()=>{
//         console.log("hello pranshu tiwari")
//     }, [])
//     return (
//         <div>
//             <h1>pranshu tiwari</h1>
//         </div>
//     )
// }


export const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("count is ", count)
    }, [count])
    
    return (
        <div className="container">
            <h1>UseEffect Hook</h1>
            <h2>count is {count}</h2>
            <button onClick={()=>{setCount(count + 1)}}>increament</button>
        </div>
    )
}


