import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensure uniqueness
      lowercase: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email validation
    },
    password: {
      type: String,
      required: true,
      select: false, // Prevent password from being queried by default
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      }
    ],
    image: {
      type: String,
      required: true,
    },
    courseProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseProgress"
      }
    ]
  },
  { timestamps: true } // Automatically create createdAt & updatedAt
);

// Indexing for faster lookups
userSchema.index({ email: 1 }); //this will execute binary search rather than linear search...

const USER = mongoose.model("User", userSchema);
export default USER;
