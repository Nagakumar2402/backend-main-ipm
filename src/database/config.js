import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInterface = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(` MONGO_DB Connected ${connectionInterface.connection.host}`);
  } catch (error) {
    console.log(chalk.red.bold("\n MONGO_DB Connection Failed"), error);
    process.exit(1);
  }
};

const disconnectDB = async () =>
  mongoose.connection.close(" MONGO_DB Disconnected");

export { connectDB, disconnectDB };
