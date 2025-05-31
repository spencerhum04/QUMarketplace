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
    bookmarks: {
        type: Array,
        default: []
    },
}, {timestamps: true})

export const User = mongoose.model("Post", postSchema);