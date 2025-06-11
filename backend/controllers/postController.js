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

export const likeOrDislike = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (post.like.includes(loggedInUserId)) {
            // dislike
            await Post.findByIdAndUpdate(postId, {$pull:{like:loggedInUserId}});
            return res.status(200).json ({
                message: "User disliked your tweet.",
                success: true
            })
        } else {
            //like
            await Post.findByIdAndUpdate(postId, {$push:{like:loggedInUserId}});
            return res.status(200).json ({
                message: "User liked your tweet.",
                success: true
            })
        }
    } catch (error) {
        console.log(error);
    }
}