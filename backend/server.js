import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT|| 5000;

dotenv.config()
app.use(express.json());  //to parse incoming request from json payloads(from request)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

// app.get("/login", (req, res)=>{

//     res.send('Hello World!!!!!!!!!!!!')
// });


app.listen(PORT, ()=>{

    connectToMongoDB();
    console.log(`servere running on ${PORT}`)

})