import React from "react";

import './Button.css'


const ButtonAddTask = ({children, onClick}) => {
    return (

        <> 
        <button onClick={onClick} className="add-task-button">{children}</button>
        </>
      );
}
 
export default ButtonAddTask;