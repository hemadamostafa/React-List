import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from "react"

function App() {

  const[tasks,setTasks] = useState(
    [
        {
            id:1,
            text:"See The Doctor",
            day:"5th feb",
            reminder:true
        
        },
    
        {
            id:2,
            text:"See The School",
            day:"14th feb",
            reminder:true
        
        },
    
        {
            id:3,
            text:"See The Collage",
            day:"20th feb",
            reminder:true
        
        }
    
    ]
)

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder} : task))
  //tasks[id].reminder = true;

}

  return (
    <div className="container">
      <Header title="Task App" />
      {tasks.length > 0 ? 
      (<Tasks toggle={toggleReminder} tasks={tasks} onDelete={deleteTask} /> ):
      ("There's No Tasks")}
    </div>
  );
}

export default App;
