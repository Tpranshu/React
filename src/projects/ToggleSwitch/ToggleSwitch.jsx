import { useState } from "react";
import "./Toggleswitch.css";
export const ToggleSwitch = () => {
    const [isOn, SetIsOn] = useState(false);
    const handleToggleClick =()=>{
        SetIsOn(!isOn);
    }
    return (
        <div className="toggle-switch" style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}} onClick={handleToggleClick}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <span className="switch-state">{isOn ? "On" : "OFF"}</span>
            </div>
        </div>
    )
}
/*
notes -
1. className={`switch ${isOn ? "on" : "off"}`} --> it is a class of on.css and off.css file according to their true or false condtion.

2. className="switch-state">{isOn ? "On" : "OFF"} --> it is a simple ternory condtional operator.
*/


