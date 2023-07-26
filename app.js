import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

// used to connect .env file with server
config({
  path: "./data/config.env",
});

// using middlware
// middleware needed for accessing json data coming from payload
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}))

// using routes
// here we added /users as prefix while using the routers
app.use("/users", userRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// using error middleware
app.use(errorMiddleware)
