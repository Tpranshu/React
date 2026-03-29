import { useState } from "react";
export const State = () => {
    // let value = 0;
    // const ButtonClick = () => {
    //     variable ++;
    //     console.log(variable);
    // }
    const [value, setValue] = useState(0);
    const ButtonClick = () => {
        setValue(value + 1 );
    }
    return (
        <>

            <h1>{value}</h1>
            <button onClick={ButtonClick} >Increment</button>
        </>
    )
}

