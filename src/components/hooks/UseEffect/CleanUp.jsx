import { useEffect, useState } from "react"
import "./index.css"

export const CleanUp = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    return (
        <div className="container effect-container">
            <p>count is <span>{count}</span></p>
        </div>
    )
}


