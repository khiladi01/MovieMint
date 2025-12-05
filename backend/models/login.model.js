import mongoose from "mongoose";

const registerUSerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requied: true,
    match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
  },
});

export const registerUser = mongoose.model("registerUser", registerUSerSchema);

