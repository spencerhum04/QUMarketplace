import express from "express";
import dotenv from "dotenv";
import databaseConection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import messageRoute from "./routes/messageRoute.js";

dotenv.config({
    path: ".env"
})
databaseConection();
const app = express();

// middlewares
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})