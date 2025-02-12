import mongoose from "mongoose";
const profileSchema = new mongoose.Schema(
    {
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"], // Standardize gender values
      },
      dateOfBirth: {
        type: Date, // Store as Date type for better manipulation
      },
      about: {
        type: String,
        trim: true
      },
      contactNumber: {
        type: String, // String to support country codes
        trim: true,
        match: /^[0-9]{10,15}$/, // Ensure valid phone number length
      }
    },
    { timestamps: true } // Enable timestamps
  );
  
  const PROFILE = mongoose.model("Profile", profileSchema);
  export default PROFILE;
  