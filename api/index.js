import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

//PORT
const port = 8800;

//connect with MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//Notification disconnect MongoDB cloud
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.get("/", (req, res) => {
  res.send("hello");
});

//middleware 


app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/users',usersRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/api/rooms',roomsRoute);

app.use((err,req,res,next) => {

  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong !"
 
  return res.status(errorStatus).json({
    success: false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})


app.listen(port, () => {
  connect();
  console.log("Connected BackEnd");
});
