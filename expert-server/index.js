import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import authRoutes from "./routes/authRoutes.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
