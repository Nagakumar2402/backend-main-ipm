import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

import { connectDB } from "./database/config.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(` Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(" connection failed !!! ", error);
  });
