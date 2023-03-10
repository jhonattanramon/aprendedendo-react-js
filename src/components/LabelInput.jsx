import React from "react";

import "./styleLabel.css"

const LabelInput = ({type, name}) =>{

    return(
        <>
        <div>
            <div>
            <label htmlFor={type}> {name}:</label>
            </div>

            <div>
            <input className="inputLabel" type={type} />
            </div>
        </div>
        </>
    )
}
  

export default LabelInput