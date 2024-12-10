import BlogModal from "@/app/lib/modals/BlogModal";

export async function GET(request: any,{params}:any) {
    const id = params.id
const blog = await BlogModal.findById(id)
    console.log(id);
    return Response.json(blog)
}


export async function PUT(request: any,{params}:any) {
    const id = params.id
const editblog = await request.json()

const updated = await BlogModal.updateOne({
    _id:id
},{
    ...editblog
}
);
return Response.json({blog:updated,msg:"blog updated succesfully"})
}



export async function DELETE(request: any,{params}:any) {
    const id = params.id
const blog = await BlogModal.deleteOne({_id:id})
    return Response.json({msg:'blog delete succesfully'})
}


