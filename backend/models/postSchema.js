import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true})

export const Post = mongoose.model("Post", postSchema);