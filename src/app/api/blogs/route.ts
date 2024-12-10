import { connectDB } from "@/app/lib/dbConnect"
import BlogModal from "@/app/lib/modals/BlogModal"




export async function GET(request:any){
 await connectDB()
 const blogs = await BlogModal.find()
 console.log('blogs from mongodb',blogs);
 
    return Response.json({
     data: blogs,
         msg: "Todos Fetch Succesfully"
     })
 }
 

 
   
    
export async function POST(request:any){
    await connectDB()
    const blog = await request.json()
    const blogadded = await new BlogModal({ ...blog })
   await blogadded.save()
    console.log('blogs from mongodb',blogadded);
    
       return Response.json({
        data: blogadded,
            msg: "blog added Succesfully"
        })
    }
    