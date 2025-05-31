import express from "express";
import dotenv from "dotenv";
import databaseConection from "./config/database.js";

dotenv.config({
    path: ".env"
})
databaseConection();
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})