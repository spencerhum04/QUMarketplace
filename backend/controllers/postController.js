import { Post } from "../models/postSchema.js";

export const createPost = async (req, res) => {
    try {
        const {description, id} = req.body;
        if (!description || !id) {
            return res.status(401).json ({
                message: "Fields are required.",
                status: false
            });
        }
        
        await Post.create ({
            description,
            userId:id
        });

        return res.status(201).json ({
            message: "Post created succcessfully.",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (req, res) => {
    try {
        const {id} = req.params;
        await Post.findByIdAndDelete(id);
        return res.status(200).json ({
            message: "Post deleted successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}