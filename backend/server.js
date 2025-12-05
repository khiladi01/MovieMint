import express from "express"
import dataBase from "./config/db.js"
import userRouter from "./routes/user.router.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors";

const app = express()
const port = process.env.PORT || 4000

// connect db
dataBase();

// middlewares for parse json
app.use(express.json()) 
app.use(cors())

// router
app.use("/api" , userRouter)

// running on port
app.listen(port , () => {
          console.log(`Server is running on port http://localhost:${port}`)
})

