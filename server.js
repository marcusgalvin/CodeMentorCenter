const express = require("express")
const mongoose = require("mongoose")

//  routes
// const users = require("./routes/api/users");

const app = express()

// initiate API routes

// ROUTE  http://localhost:5000/api/user
// DESC   register / login / get user info
// app.use("/api/user", users)


app.get("/test", (req, res) => res.send("Hello World, this the Code Mentor Center backend server."))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Server is running on port:" + PORT))