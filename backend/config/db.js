import mongoose from "mongoose"

async function dataBase (){
               try {
                   const connection = await mongoose.connect(process.env.MONGO_URI)
                   console.log(`Database connection success: ${connection.connection.host}`)

               } catch (error) {
                   console.log({success: false , message: "Database connection error"})
               }
}

export default dataBase;