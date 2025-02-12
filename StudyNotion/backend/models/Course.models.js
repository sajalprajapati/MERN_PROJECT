import mongoose from "mongoose";

const courseSchema=mongoose.Schema
(
    {
     courseName:
     {
        type:String,
        trim:true,
        required:true,
     },
     courseDescription:
     {
        type:String,
        required:true,
     },
     instructor:
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     },
     whatYouWillLearn:
     {
        type:String
     },
     CourseContent:
     [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
     ],
     ratingAndReview:
     [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
     ],
     prce:
     {
        type:Number,
        required:true,
     }
     ,
     thumbnail:
     {
        type:String,
        trime:true,
        required:true,
     }
     ,
     tags:
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tags"
     },

     studentEnrolled:
     [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
     ],
     language:
     {
        type:String,
        trim:true
     }

    }
);


const COURSE=mongoose.model("Course",courseSchema);
export default COURSE;