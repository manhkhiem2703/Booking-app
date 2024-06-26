import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updatedHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updatedHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id",getHotel);
//GETALL
router.get("/",getAllHotel);
export default router;
