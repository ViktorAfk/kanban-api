import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
  const DB_URI = process.env.MONGODB_URI;

  try {
    if (DB_URI) {
      const conn = await mongoose.connect(DB_URI);
      console.log(`DataBase connected: ${conn.connection.host} `);
    }
  } catch (error) {
    console.log(error);
  }
};
