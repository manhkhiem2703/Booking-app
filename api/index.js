import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
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
app.use(express.json());
app.use('/auth',authRoute);
app.use('/users',usersRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/rooms',roomsRoute);

app.listen(port, () => {
  connect();
  console.log("Connected BackEnd");
});
