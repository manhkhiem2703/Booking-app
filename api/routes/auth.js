import express from 'express'
import { login, register } from '../controllers/auth.js';

const router = express.Router();

//CREATE
router.post("/register", register)
router.post("/login", login)
//UPDATE
//DELETE
//GET
//GETALL
router.get("/",(req,res) =>{
    res.send("hello");
});

export default router 