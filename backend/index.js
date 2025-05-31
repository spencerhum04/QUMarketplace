import express from "express";
import dotenv from "dotenv";
import databaseConection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

dotenv.config({
    path: ".env"
})
databaseConection();
const app = express();

// middlewares
app.use(express.urlencoded ({
    extends: true
}));
app.use(express.json());
app.use(cookieParser());

// api
app.use("/api/v1/user", userRoute);

"https://localhost:8080/api/v1/user/register"

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})