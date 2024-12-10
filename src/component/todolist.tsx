"use client"
import { deletetodo, edittodo } from "@/actions/todos";
import { useState } from "react";
// import { edittodo } from "@/actions/page";

export default function List({todo}:any){
    const [edit,setEdit] = useState(false)
    const [task,setTask] = useState('')

    
    const onComplete = async()=>{
        let obj = {...todo}
        obj.isComplete = !obj.isCompleted
     console.log(obj);
     await edittodo(obj)
      }
      const onEdit = async()=>{
        if(edit){
let obj = todo
obj.todo = task
await edittodo(obj)
setEdit(false)
setTask('')
        }else{
          setEdit(true)
          setTask(todo.todo)
        }
      }
      const onDelete = async()=>{
        await deletetodo({id:todo.id})

      }
    return(
        <>
        
  
<div className="flex ">
  {
    edit ? <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} /> :

<p className={`border p-2 text-center text-3xl w-2/3 mx-auto bg-slate-500
 ${todo.isCompleted ? 'bg-green-400' : 'bg-slate-200'}`}>{todo.todo}</p>
  }
            <div>
              <button onClick={onComplete} >{todo.isCompleted ? 'Done' : 'notDone'}</button>
              <button onClick={onEdit}>edit</button>
              <button onClick={onDelete}>delete</button>

            {/* <button onClick={onComplete} className="border bg-red-400 mx-3">{todo.isComplete ? 'true':"false"}</button> */}
            {/* <button className="border bg-red-400 mx-3">Edit</button> */}
            {/* <button className="border bg-red-400 mx-3">Delete</button> */}
            </div>
</div>
        
          

       
        </>
    )
}