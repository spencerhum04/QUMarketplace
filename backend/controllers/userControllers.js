import { User } from "../models/postSchema";

export const Register = async (req, res) => {
    try {
        const {name, username, email, apssword} = req.body;
        if(!name || !username || !email || !password) {
            return res.status(401).json ({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findOne(email);
        if(user) {
            return res.status(401).json ({
                message: "User already exists.",
                success: false
            })
        }

        await User.create ({
            name,
            username,
            email,
            password
        })
    } catch (error) {

    }
}