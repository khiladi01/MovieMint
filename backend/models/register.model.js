import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      lowercase: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    Password: {
      type: String,
      requied: true,
      match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    },
    Confirmpassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Register = mongoose.model("Register", registerSchema);

