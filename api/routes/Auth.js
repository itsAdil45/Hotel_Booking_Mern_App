import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("auth end point")

})


router.get("/register", (req, res) => {
    res.send("auth register end point")

})
export default router;