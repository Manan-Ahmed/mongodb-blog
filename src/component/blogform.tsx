"use client"
import { addblog } from "@/actions/blog";
import { addtodo } from "@/actions/todos";
import { title } from "process";
// import { addtodo } from "@/actions/page";
import { useRef } from "react";



export default function BlogForm(){

    const formRef = useRef(null)
    return(
        <>

        <h1 className="text-3xl text-center font-bold">Add Blog</h1>
     <form ref={formRef} action={async(formData)=>{
        console.log(formData);
        const obj = {
            title: formData.get("title"),
            author: formData.get("author"),
            body: formData.get("body")

        }
        console.log("obj",obj);
        
        await addblog(obj)
     }} className="border-2 text-center  mx-auto flex flex-col gap-2">
        <input type="text" name="title" className="border-2  p-2 flex flex-grow" placeholder="title" required/>
        <input type="text" name="author" className="border-2  p-2 flex flex-grow" placeholder="author" required/>

       <textarea name="body" placeholder="description" id=""></textarea>
        {/* <input type="submit" value={'Add blog'} className="p-2 px-2 rounded"/> */}
        <input
        type="submit"
        className="bg-purple-600 cursor-pointer rounded mt-2 p-2 px-4"
        value={"Add Blog"}
      />
     </form>
        
        </>
    )
}