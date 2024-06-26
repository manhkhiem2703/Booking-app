import express from 'express'
import { deleteUser, getAllUser, getUser, updatedUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})
//CREATE
//UPDATE
router.put("/:id", updatedUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id",getUser);
//GETALL
router.get("/",getAllUser);
export default router