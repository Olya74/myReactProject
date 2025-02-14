const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, "data.json");
// Register user
app.post("/register", (req, res) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const dateAt=new Date().toString();
  // Read existing users
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    let users = [];
    if (!err && data) {
      users = JSON.parse(data);
    }
    // Check if user exists
    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ message: "User already exists" });  
    }
    // Add new user
     users.push({ name, password, email,dateAt });
    // Write to file
    fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving user" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
 });
// Login user
   app.post("/login",(req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return res.status(400).json({message:"All fields are required"});
  }
  fs.readFile(DATA_FILE,"utf8",(err,data)=>{
    if(err){
      return res.status(500).json({message:"Error reading users"});
    }
    const users=JSON.parse(data);
    const user=users.find((user)=>user.email===email && user.password===password);
    if(!user){
      return res.status(400).json({message:"Invalid credentials"});
    }
    const userDto = { name: user.name, dateAt: user.dateAt};
    // res.json({message:"Login successful",name:user.name,dateAt:user.dateAt});
      res.json({
        message: "Login successful",
        user: userDto,
      });
  });
});



 app.get("/users", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users" });
    }
   const usersDto = JSON.parse(data);
   usersDto.forEach((user) => {
      delete user.password;
    });
    res.json({ usersDto});
  });
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
