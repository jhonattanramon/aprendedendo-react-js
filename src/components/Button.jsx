import React from "react";

import "./Button.css"

const Button = (props) => {
        return(
            <> 
                <button className="button"> `{props.tipo1}`</button>
            </>
        )
}

export default Button;