import mongoose from "mongoose";

const userSchema = () => {
    new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            unique: true
        },
        comments: {
            type: String,
            required: true
        },
        tags: {
            type: String
        },
        likes: {
            type: [String],
            default: 0
        },
      dislikes: {
            type: [String],
            default: 0
        },
        subscribedUsers: {
            type: [String]
        },

    }, { timestamps: true })
}

export default mongoose.model("user", userSchema)
