import DeleteBlogBtn from "@/component/deleteblogbtn"
import Link from "next/link"



export default async function DetailBlog({params}:any){
    let res:any = await fetch(`http://localhost:3000/api/blogs/${params.id}`)
    res = await res.json()
    return(
        <>


<div className="container mx-auto flex flex-col gap-5 my-5">
      <div className="flex justify-end gap-3">
      <Link href={`/blogs/edit/${params.id}`}>Edit</Link>

        <Link href={`/blogs/edit/${params.id}`}  className="bg-blue-100 px-2 py-1 rounded"
        >Edit</Link>

        <DeleteBlogBtn  id={params.id}/>

        {/* <DeleteBlogButton id={params.id} /> */}
      </div>
      <h1 className="font-bold text-3xl">{res.title}</h1>
      <h1 className="font-medium text-xl">{res.body}</h1>
      <h1 className="font-normal text-xl">
        Author : <span className="underline">{res.autor}</span>
      </h1>
    </div>
        </>
    )
}