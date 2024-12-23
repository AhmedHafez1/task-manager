import express from "express";
import tasksRoute from "./routes/tasks.route";
import usersRoute from "./routes/users.route";
import dotenv from "dotenv";
import "express-async-errors";
import errorMiddleware from "./middleware/error.middleware";
import { AppError } from "./middleware/app.error";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/tasks", tasksRoute);
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("App is running!");
});

app.use("*", () => {
  throw new AppError(404, "Route not found");
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
