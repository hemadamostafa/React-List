import Task from "./Task"


//const tasks = [{id:1,text:"See The Doctor",day:"5th feb",reminder:true},
//    { id:2,text:"See The School",day:"14th feb",reminder:false},
//    {id:3,text:"See The Collage",day:"20th feb",reminder:true}]

const Tasks = ({tasks,onDelete,toggle}) => {

  return (
    <>
        {tasks.map((task)=>(<Task id={task.id}
         day={task.day} text={task.text} onDelete={onDelete} toggle={toggle} reminder={task.reminder}/>))}
        
    </>
  )
}

export default Tasks