"use client"
import { addtodo } from "@/actions/todos";
// import { addtodo } from "@/actions/page";
import { useRef } from "react";



export default function TodoForm(){

    const formRef = useRef(null)
    return(
        <>
     <form ref={formRef} action={async(formData)=>{
        await addtodo(formData)
        formRef.current?.reset()
     }} className="border-2 text-center mx-auto">
        <input type="text" name="todo" className="border-2  p-2 flex flex-grow"/>
        <input type="submit" value={'Add'} className="p-2 px-2 rounded"/>
     </form>
        
        </>
    )
}