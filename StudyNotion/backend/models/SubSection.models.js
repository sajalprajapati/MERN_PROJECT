const SubSectionSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true, // Ensures every subsection has a title
        trim: true
      },
      timeDuration: {
        type: String, // You can also use Number if storing duration in seconds
        required: true,
      },
      description: {
        type: String,
        trim: true
      },
      videoUrl: {
        type: String,
        required: true, // Ensures every subsection has a video
      }
    },
    { timestamps: true } // Enables createdAt & updatedAt
  );
  
  const SUBSECTION = mongoose.model("SubSection", SubSectionSchema);
  export default SUBSECTION;