import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyadmin } from "../utils/verifyToken.js";


const router = express.Router();
//Create
router.post("/", verifyadmin, createHotel)


//Update
router.put("/:id", verifyadmin, updateHotel)

//Delete
router.delete("/:id", verifyadmin, deleteHotel)

//Get
router.get("/:id", getHotel)
//Get All

router.get("/", getHotels)

export default router;