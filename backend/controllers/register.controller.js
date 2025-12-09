import express from "express";
const router = express.Router();
import { Register } from "../models/register.model.js";
import bcrypt from "bcrypt"

// save data via post method
export const createUser = async function (req , res) {
       try {

    const {Name , Username , Email , Phone , Password , Confirmpassword} = req.body

    if(!Name || !Username || !Email || !Phone || !Password || !Confirmpassword){
       res.status(400).json({success: false , message: "All fields are mandatory"})
       return false;
    }else if(Password !== Confirmpassword){
       res.status(400).json({success: false , message: "Password is != to Confirmpassword"})
       return false;
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(Password , saltRounds)

    const userCreate = await Register.create({Name , Username , Email , Phone , Password: hashPassword , Confirmpassword: hashPassword})
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
    const userFind = await Register.findOne();

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
