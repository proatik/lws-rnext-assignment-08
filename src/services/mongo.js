import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("Database Connected!");

    return connection;
  } catch (error) {
    console.log(error);
  }
};
