"use client"
import { deleteBlog } from "@/actions/blog"
import { useRouter } from "next/navigation"



export default function DeleteBlogBtn({id}:any){
    console.log('deletebtn',id);
    
    const router = useRouter()
    return(
        <>
    <button className="px-2 py-2 rounded" onClick={async()=>{
        await deleteBlog(id)
        router.push('/blogs')
    }}>Delete</button>

        </>
    )
}