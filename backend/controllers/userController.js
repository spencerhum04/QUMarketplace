import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                message: "Missing request body.",
                success: false
            });
        }

        const {name, username, email, password} = req.body;
        if(!name || !username || !email || !password) {
            return res.status(401).json ({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findOne({ email });
        if(user) {
            return res.status(401).json ({
                message: "User already exists.",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create ({
            name,
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json ({
            message: "Account created successfully.",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(401).json ({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json ({
                message: "Incorrect email or password.",
                success: false
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json ({
                message: "Incorrect email or password.",
                success: false
            })
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign({tokenData}, process.env.TOKEN_SECRET, {expiresIn:"1d"})

        return res.status(201).cookie("token", token, {expiresIn:"1d", httpOnly:true}).json ({
            message: `Welcome back ${user.name}`,
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {
    return res.cookie("token", "", {expiresIn:new Date(Date.now())}).json ({
        message: "User has logged out successfully.",
        success: true
    })
}

export const bookmark = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const postId = req.params.id;
        const user = await User.findById(loggedInUserId);
        if (user.bookmarks.includes(postId)) {
            // remove bookmark
            await User.findByIdAndUpdate(loggedInUserId, {$pull:{bookmarks:postId}});
            return res.status(200).json ({
                message: "Removed bookmark successfully.",
                success: true
            })
        } else {
            // add bookmark
            await User.findByIdAndUpdate(loggedInUserId, {$push:{bookmarks:postId}});
            return res.status(200).json ({
                message: "Added bookmark successfully.",
                success: true
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const getProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select("-password");
        return res.status(200).json ({
            user,
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOtherUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const otherUsers = await User.find({_id:{$ne:id}}).select("-password");
        if (!otherUsers) {
            return res.status(401).json ({
                message: "Currently do not have any users."
            })
        };
        return res.status(200).json ({
            otherUsers
        })
    } catch (error) {
        console.log(error);
    }
}