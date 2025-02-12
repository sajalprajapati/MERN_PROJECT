import mongoose from "mongoose";

const tagsSchema=new mongoose.Schema
(
    {
     name:
     {
        type:String,
        required:true,
     },
     description:
     {
        type:String,
        required:true,
        trim:true
     },
     course:
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
     }
    }
)

const TAGS=mongoose.model("Tags",tagsSchema);
export default TAGS;