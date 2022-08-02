import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/Auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to db")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected")
})


// middlewares
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.listen(8000, () => {
    connect()
    console.log("connected to backend.")
})