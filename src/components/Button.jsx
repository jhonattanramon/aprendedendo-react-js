import React from "react";

import "./Button.css"

const Button = ({Children}) => {
        return(
            <> 
                <button className="button"> 
                {Children}
                </button>
            </>
        )
}

export default Button;