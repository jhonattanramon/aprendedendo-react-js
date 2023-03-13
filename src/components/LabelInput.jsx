import React from "react";

import "./styleLabel.css"

const LabelInput = ({type, name, value, setProps}) =>{

    return(
        <>
        <div>
            <div>
            <label htmlFor={type}> {name}:</label>
            </div>

            <div>
            <input  className="inputLabel" value={value} type={type} onChange={ (e) => {
                
                if(setProps !== undefined){

                const stateSetGarantia = setProps

                stateSetGarantia(e.target.value)
                }
                
                
                
                
                
            }}/>
            </div>
        </div>
        </>
    )
}
  

export default LabelInput