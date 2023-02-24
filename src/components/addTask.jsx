import React, { useState } from "react";

import './addTask.css';
import ButtonAddTask from "./Button";

const AddTask = ({handleTaskAddition}) => {

    const [ inputData, setInputData] = useState("")


    const handleInputChange = (e) =>  {
         setInputData(e.target.value)   
         }


         
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }

    return(

        <>
        <div className="add-task-container">
        <input 
            onChange={handleInputChange}
            
            value = { inputData}
        className="add-task-input" type="text" />

        <div className="add-task-button-container">

        <ButtonAddTask onClick={handleAddTaskClick}> 
            Adicionar
        </ButtonAddTask> 

        </div>
        </div>
        
        </>
    ) 

}

export default AddTask;