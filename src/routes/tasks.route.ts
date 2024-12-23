import express from "express";
import {
  assignTaskController,
  completeTaskController,
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  updateTaskController,
} from "../controllers/tasks.controller";

const router = express.Router();

router.get("/", getTasksController);
router.get("/:id", getTaskController);
router.post("", createTaskController);
router.delete("/:id/uncomplete", deleteTaskController);
router.patch("/:id/complete", completeTaskController);
router.patch("/:id", updateTaskController);
router.patch("/:id/assign/:assigneeId", assignTaskController);

export default router;
