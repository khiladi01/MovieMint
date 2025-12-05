import express from "express";
import { createUser , getUser } from "../controllers/register.controller.js"
const router = express.Router();

// router with post
router.post("/users" , createUser)

// router with get
router.get("/account" , getUser)

export default router;

