import { Register } from "../models/register.model.js";

export async function loginUser (req , res){
             try {
                const {Username , Password} = req.body

                const match = await Register.findOne({ Username })
                if(!match)
                   return res.status(401).json({success: false , message: "User not found"})
                   
                const isMatch = await Register.findOne({ Password })
                if(!isMatch)
                    return res.status(401).json({success: false , message: "Username & Password cannot match"})

                res.status(200).json({success: true , message: "User login success" , isMatch})
                
            } catch (error) {
                res.status(400).json({success: false , message: "User login failed" , error: error.message})
             }
}