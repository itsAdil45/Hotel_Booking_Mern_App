import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyadmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("logged in")
// })


// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("you can delete")
// })
// router.get("/checkadmin/:id", verifyadmin, (req, res, next) => {
//     res.send("admin")
// })



//Update
router.put("/:id", verifyUser, updateUser)

//Delete
router.delete("/:id", verifyUser, deleteUser)

//Get
router.get("/:id", verifyUser, getUser)
//Get All

router.get("/", verifyadmin, getUsers)

export default router;