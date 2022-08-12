import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyadmin } from "../utils/verifyToken.js";

const router = express.Router();
//Create
router.post("/:hotelid", verifyadmin, createRoom)


//Update
router.put("/:id", verifyadmin, updateRoom)

//Delete
router.delete("/:id/:hotelid", verifyadmin, deleteRoom)

//Get
router.get("/:id", getRoom)
//Get All

router.get("/", getRooms)
export default router;