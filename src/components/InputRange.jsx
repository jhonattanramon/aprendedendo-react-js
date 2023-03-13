import React from "react";



const InputRange = ({min, max, setProps }) => {

    return <input type="range" min={min} max={max}  onChange={(e) => { 
        
        const stateSetGarantia = setProps

        stateSetGarantia(e.target.value)

        }
     } />
}

export default InputRange