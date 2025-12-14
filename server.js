// server.js
const express = require("express");
const fetch = require("node-fetch");
const cron = require("node-cron");

const app = express();
const PORT = 3000;

// Your Pantry details
const PANTRY_ID = "1aa734dd-5f27-406d-b240-6736940a67eb";
const BASKET_NAME = "Prism";

// Middleware to parse JSON
app.use(express.json());

// Example signup route
app.post("/signup", async (req, res) => {
  const userData = req.body;
  try {
    await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BASKET_NAME}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    res.json({ message: "User signed up successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
});

// Example login route
app.post("/login", async (req, res) => {
  try {
    const response = await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BASKET_NAME}`);
    const data = await response.json();
    // Add your login validation logic here
    res.json({ message: "Login successful", data });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

// 🕒 Cron job: runs once every day at midnight
cron.schedule("0 0 * * *", async () => {
  try {
    const response = await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BASKET_NAME}`);
    const data = await response.json();
    console.log("Pantry basket refreshed:", data);
  } catch (err) {
    console.error("Error refreshing Pantry basket:", err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
