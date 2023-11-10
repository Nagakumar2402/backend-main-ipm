import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = Express();
//cors middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//middleware
app.use(Express.json({ limit: "16kb" }));
app.use(Express.urlencoded({ extended: true, limit: "16kb" }));
app.use(Express.static("public"));
app.use(cookieParser());

export { app };
