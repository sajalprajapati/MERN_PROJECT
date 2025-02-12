import mongoose from "mongoose";
const sectionSchema=mongoose.Schema
(
    {
     sectionName:
     {
      type:String
     },
     subSection:
     [
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"SubSection"
        }
     ]

    }
);

const SECTION=mongoose.model("Section",sectionSchema);
export default SECTION;