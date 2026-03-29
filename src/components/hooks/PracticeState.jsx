import { useState } from "react"

// const users = [
//     { name: "pranshu", age: 20 },
//     { name: "pranshu1", age: 20 },
//     { name: "pranshu2", age: 20 },
//     { name: "pranshu3", age: 20 }
// ]
export const PracticeState = () => {
    const [users] = useState([{ name: "pranshu", age: 20 },
        { name: "pranshu1", age: 20 },
        { name: "pranshu2", age: 20 },
        { name: "pranshu3", age: 20 }]);
    return (
        <div>
            <h1>users list</h1>
            <ul>
                {
                    users.map((currElm, index) => {
                        return (
                            <li key={index}>
                                {currElm.name} and {currElm.age} years old
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}