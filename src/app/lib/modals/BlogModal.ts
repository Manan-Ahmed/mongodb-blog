// import mongoose from 'mongoose';
// const { Schema } = mongoose;

import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { title } from "process";

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });




const BlogSchema = new mongoose.Schema({
    title: {type:String,unique: true},
    body:String,
    author:String,

},{
    timestamps: true
}
)

const BlogModal = mongoose.models.Blogs || mongoose.model("Blogs",BlogSchema)

export default BlogModal