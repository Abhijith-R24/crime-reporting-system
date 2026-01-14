import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Serve frontend
app.use("/frontend", express.static(path.join(process.cwd(), "frontend")));

app.get("/", (req, res) => {
  res.redirect("/frontend/login.html");
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
