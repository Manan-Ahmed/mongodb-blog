"use client"
import {  getSingleBlog, updateBlog } from "@/actions/blog";

import { use, useEffect, useRef, useState } from "react";



export default function EditForm({params}:{params: Promise<{id:string}>}){

const [blogDetail,setBlogDetail] = useState<any>('')
const resolvedparams = use(params)
const {id} = resolvedparams
useEffect(()=>{
   getBlogDetail()

},[params])

async function getBlogDetail(){
   let blog = await getSingleBlog(id)
   if(blog){
    setBlogDetail(blog)
   }else{
    setBlogDetail('')
   }
   console.log('blog',blog);
   
}
    const formRef = useRef(null)
    return(
        <>
     <form ref={formRef} action={async()=>{
        const obj = {
          ...blogDetail

        }
        console.log("obj",obj);
       await updateBlog(id,obj)
    //    router.push('/blogs')
        // revalidatePath('/blogs')
        
     }} className="border-2 text-center  mx-auto flex flex-col gap-2">
        <input type="text" name="title" value={blogDetail.title}
        onChange={(e)=>setBlogDetail({...blogDetail,title:e.target.value})}
        className="border-2  p-2 flex flex-grow" placeholder="title" required/>

        <input type="text" name="author" value={blogDetail.autor} 
                onChange={(e)=>setBlogDetail({...blogDetail,autor:e.target.value})}
        className="border-2  p-2 flex flex-grow" placeholder="author" required/>

       <textarea name="body" value={blogDetail.body} 
               onChange={(e)=>setBlogDetail({...blogDetail,body:e.target.value})}
       placeholder="description" id=""></textarea>
        <input type="submit" value={'Edit blog'} className="p-2 px-2 rounded"/>
     </form>
        
        </>
    )
}