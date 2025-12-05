import express from "express";
const router = express.Router();
import { registerUser } from "../models/login.model.js";

// save data via post method
export const createUser = async function (req , res) {
       try {
    const {username , email , phone , password} = req.body
    const userCreate = await registerUser.create({username , email , phone , password})
    res
      .status(201)
      .json({ success: true, message: "User created success", userCreate });
    console.log({ success: true, message: "User created success" });
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        message: "User failed to create account",
        error: error.message,
      });
  }
};

// fetch data via get method
export const getUser = async function (req , res){
      try {
    const userFind = await registerUser.find();

    res
      .status(200)
      .json({ success: true, message: "User data fetch success", userFind });
    console.log({
      success: true,
      message: "User data fetch success",
      userFind,
    });
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        message: "User data fetch failed",
        error: error.message,
      });
    console.log({
      success: false,
      message: "User data cannot fetch",
      error: error.message,
    });
  }
}

export default router;
