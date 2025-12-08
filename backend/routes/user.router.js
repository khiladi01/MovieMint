import express from "express";
import { createUser , getUser } from "../controllers/register.controller.js"
import { loginUser } from "../controllers/login.controllers.js";
const router = express.Router();

// router with post
router.post("/users" , createUser)

// router with get
router.get("/account" , getUser)

// router for login
router.post("/login" , loginUser)

export default router;

