

const Task = ({text,id,day,reminder,onDelete,toggle}) => {
    console.log(reminder)
  return (
    
    <div className={`task ${reminder ? "reminder" : "bg-danger" }`} onDoubleClick={()=>toggle(id)}>
        <h3 key={id}>{text}<span style={{color:"red",cursor:"pointer"}} onClick={()=>onDelete(id)}><i className="fa fa-times-circle" aria-hidden="true"></i></span> </h3>
        <p>{day}</p>
    </div>
  )
}

export default Task