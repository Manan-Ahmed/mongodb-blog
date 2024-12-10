"use server"

import { revalidatePath } from "next/cache";

// import { revalidatePath } from "next/cache";


export async function addtodo(formdata:any) {
    const todo = formdata.get('todo')



try{
    await fetch('http://localhost:3000/api/todos',{
        method: 'POST',
        body: JSON.stringify({todo})
    })    
 revalidatePath('/todos')
}catch(e){
    console.log('error');
    
}
}


export async function edittodo(obj:any) {
console.log('update obj',obj);

try{
    
    await fetch('http://localhost:3000/api/todos',{
        method: 'PUT',
        body: JSON.stringify(obj)
    })    
    revalidatePath("/todos")

}catch(e){
    console.log('error');
    
}
}



export async function deletetodo(obj:any) {
    
    try{
        
        await fetch('http://localhost:3000/api/todos',{
            method: 'DELETE',
            body: JSON.stringify(obj)
        })    
        revalidatePath("/todos")
    
    }catch(e){
        console.log('error');
        
    }
    }