import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
    try {
        const {senderId, receiverId, text} = req.body;
        if (!senderId || !receiverId || !text) {
            return res.status(401).json ({
                message: "Fields are required.",
                status: false
            });
        }

        await Message.create ({
            text,
            senderId,
            receiverId
        })

        return res.status(201).json ({
            message: "Message sent succcessfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}