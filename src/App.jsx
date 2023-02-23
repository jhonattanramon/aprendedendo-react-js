import React, { useState } from "react";
import './app.css' 
import Tasks  from "./components/taks";
import AddTask from "./components/addTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'estudar programação',
      completed: false,
    },

    {
      id: 2,
      title:'ler livros',
      completed: true,
    },
  ]);

  return( 
  <>
    <div className="container">

      <AddTask />
    <Tasks tasks={tasks}/>
   
     </div>

  </>
)

};

export default App