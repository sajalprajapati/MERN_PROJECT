import mongoose from "mongoose";

const OTPSchema=new mongoose.Schema(
    {
      email:
      {
        type:String,
        required:true,
      },
      otp:
      {
        type:String,
        required:true,
      },
      createAt:
      {
        type:Date,
        default:Date.now(),
        expires:5*60,
      }
    }
);

const OTP=mongoose.model("OTP",OTPSchema);
export default OTP;