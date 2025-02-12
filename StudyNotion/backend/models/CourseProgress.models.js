import mongoose from "mongoose";
const courseProgressSchema=new mongoose.Schema
(
    {
     courseId:
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
     },

     CompletedVideo:
     [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection"
        }
     ],

     
    }
)


const COURSEPROGRESS=mongoose.model("CourseProgress",courseProgressSchema);
export default COURSEPROGRESS;