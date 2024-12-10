

// "use client"

import TodoForm from "@/component/todoform";
import List from "@/component/todolist";

export default async function Todo() {
    let res = await fetch('http://localhost:3000/api/todos')
    res = await res.json()


   

    return (
   <>


     <TodoForm/>
      {
        res.data?.map((data:any,i:string)=>{
           return   <List todo={data} key={i}/>

        })
      }
   </>
  );
}






