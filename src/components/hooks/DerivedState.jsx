import { useState } from "react"


export const DerivedState = () => {
    // Derived state in react
    const [users] = useState([
    { name: "pranshu", age: 20 },
    { name: "pranshu1", age: 20 },
    { name: "pranshu2", age: 20 },
    { name: "pranshu3", age: 20 }]);

    const userscount = users.length;
    const usersavg = users.reduce((accum, currElm) => accum + currElm.age, 0) / userscount;
    return (
        <div>
            <h1>users list</h1>
            <ul>
                {
                    users.map((currElm, index) => {
                        return (
                           
                                <li key={index}>
                                    {currElm.name} and {currElm.age} years old
                                    <p>Users count - {userscount}</p>
                                    <p>Average count - {usersavg}</p>
                                </li>
                                
                        
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DerivedState
