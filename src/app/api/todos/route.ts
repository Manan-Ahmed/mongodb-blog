// import { NextResponse } from "next/server";


// export default async function POST(request:any){
//     let data =await request.json()
//     console.log(data);
    
//     return NextResponse.json({success:true,data:'yes'})
// }
















const todos = [
    {
        id:1,
       todo: 'task1',
       isCompleted:false
    
    },
    {
        id:2,
       todo: 'task2',
       isCompleted:false
    
    },
     {
        id:3,
       todo: 'task3',
       isCompleted:false
    
    }, {
        id:4,
       todo: 'task4',
       isCompleted:false
    
    },
    {
        id:5,
       todo: 'task5',
       isCompleted:true
    
    }
]


export async function GET(request:any){
   return Response.json({
    data:todos,
        msg: "Todos Fetch Succesfully"
    })
}


export async function POST(request:Request){
    let data = await request.json()
    console.log("data fetch frontent===>",data);
    let obj = {
        ...data,
        isCompleted: false,
        id:todos.length + 1
    }
    todos.push(obj)
    return Response.json({
data:todos,
msg:'todo added succesfully'
    })
    
 }
 
 

 export async function PUT(request:Request){
    let data = await request.json()
    const todoInd = todos.findIndex((todo)=> todo.id == data.id)
    console.log('update',todoInd,data);
    
    todos[todoInd] = data
    return Response.json({
data:todos,
msg:'todo updated succesfully'
    })
    
 }
 


 export async function DELETE(request:Request){
    let data = await request.json()
    const todoInd = todos.findIndex((todo)=> todo.id == data.id)
    console.log('update',data.id);
todos.splice(todoInd,1)    
    return Response.json({
data:todos,
msg:'todo Delete succesfully'
    })
    
 }
 

// export async function POST(request:any){
//    const data = await request.json()
//    const obj = {
//     ...data,
//     isComplete:false,
//     id:todos.length + 1
//    }
//    todos.push(obj)
//    console.log('data from frontend',data);
//    return Response.json({
//     data: todos,
//     msg: "Todos added Succesfully"
// })
//  }

//  export async function PUT(request:any){
//     const data = await request.json()
//    const todoInd:any = todos.findIndex((todo)=> todo.id === data.id)
//  todos[todoInd] = data
//     return Response.json({
//      data: todos,
//      msg: "Todos update Succesfully"
//  })
//   }