# 🚀 MovieMint MERN Full Stack MVC Project

This project is my hands-on journey into building a production ready full stack application using proper MVC architecture, modern tools, and secure authentication methods. No shortcuts — just clean, structured backend and frontend development

# 🏗️ Project Overview

This app is structured like a real-world system:

Backend follows MNC-style MVC architecture

Frontend uses modern tooling

Auth system built with JWT + bcrypt

Database connected through MongoDB

HTTP methods implemented with clean async/await fetch logic

Secure token generation on login

Every line here teaches me something about how production code actually works — not tutorial toy examples.

# 🔥 Features (Current Work)

Implemented GET and POST API routes

Connected backend to MongoDB

Built a reusable fetch API function with async/await

Learned how promises work behind fetch

Backend returning real user data safely

Working on Login system using:

JWT → To generate and verify tokens

bcrypt → To hash passwords securely

Preparing authenticated dashboard flow (user sees only their own details)

## 🧩 Folder Structure

A proper structure is the backbone of a clean project.
This is how everything is organized:

# 🎨 Frontend (Vite + React + TailwindCSS)
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── App.jsx
│
│── public/
│── index.html
│── package.json
│── tailwind.config.js
│── vite.config.js

# ⚙️ Backend (Node.js + Express + MongoDB, MVC Architecture)
backend/
│── config/
│   └── db.js              # MongoDB connection
│
│── controllers/
│   └── userController.js  # GET, POST, Login logic
│
│── routes/
│   └── userRoutes.js
│
│── middlewares/
│   ├── authMiddleware.js  # JWT verification
│   └── errorHandler.js
│
│── utils/
│   └── tokenGenerator.js  # JWT helper
│
│── models/
│   └── userModel.js       # Mongoose schema
│
│── server.js
│── package.json

# 🔐 Authentication System (In Progress)

User login using POST /login

Password hashing using bcrypt

Token generation using JWT

Secure route access using verification middleware

Dashboard shows only the logged-in user’s data

No leaks, no loose ends — just clean, secure authentication.

🧠 What I Have Learned

How fetch actually works under the hood with promises

How async/await simplifies API calls

How production-level MVC is structured

How to connect and work with MongoDB professionally

How JWT + bcrypt create a secure login flow

Why frontend should respect backend response shapes

How APIs are built & consumed in real apps

# 📌 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Fetch API (async/await)

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT

bcrypt

MVC architecture

# 📬 Status

Currently working on:

# 🔄 Login Page + JWT Auth + Protected Routes

Once that’s done → dashboard → role management → more endpoints.
