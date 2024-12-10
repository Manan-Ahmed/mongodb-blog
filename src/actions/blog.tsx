"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// import { revalidatePath } from "next/cache";


export async function addblog(obj:any) {
    // const todo = formdata.get('todo')



try{
    await fetch('http://localhost:3000/api/blogs',{
        method: 'POST',
        body: JSON.stringify(obj)
    })    
 revalidatePath('/blogs')
}catch(e){
    console.log('error');
    
}
}

export async function getSingleBlog(id:any) {

try{
    let res = await fetch(`http://localhost:3000/api/blogs/${id}`)  
    res = await res.json()
              return res
}catch(e){
    console.log('error');
    
}
}


export async function updateBlog(id:string,obj:any) {

try{
    
    await fetch(`http://localhost:3000/api/blogs/${id}`,{
        method: 'PUT',
        body: JSON.stringify(obj)
    })    
    revalidatePath("/blogs")

}catch(e){
    console.log('error',e);
    
}
}





export async function deleteBlog(id:any) {
    console.log('id in backend',id);
    
    try{
        
        await fetch(`http://localhost:3000/api/blogs/${id}`,{
            method: 'DELETE',
        })    
        revalidatePath("/blogs")
    
    }catch(e){
        console.log('error');
        
    }
    }