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
      
     users.push({ name, password, email });
    // Write to file
    fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving user" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
 });
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
