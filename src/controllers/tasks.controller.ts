import { assignTask } from './../services/tasks.service';
import { Request, Response } from 'express';
import {
  getTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
  completeTask,
  unCompleteTask as unCompleteTask,
} from '../services/tasks.service';

export const createTaskController = async (req: Request, res: Response) => {
  const task = await createTask(req.body);
  res.status(201).json(task);
};

export const getTasksController = async (req: Request, res: Response) => {
  const tasks = await getTasks();
  res.status(200).json(tasks);
};

export const getTaskController = async (req: Request, res: Response) => {
  const task = await getTask(parseInt(req.params.id));
  res.status(200).json(task);
};

export const deleteTaskController = async (req: Request, res: Response) => {
  await deleteTask(parseInt(req.params.id));
  res.sendStatus(204);
};

export const updateTaskController = async (req: Request, res: Response) => {
  const task = await updateTask(parseInt(req.params.id), req.body);
  res.status(200).json(task);
};

export const completeTaskController = async (req: Request, res: Response) => {
  const task = await completeTask(parseInt(req.params.id));
  res.status(200).json(task);
};

export const unCompleteTaskController = async (req: Request, res: Response) => {
  const task = await unCompleteTask(parseInt(req.params.id));
  res.status(200).json(task);
};

export const assignTaskController = async (req: Request, res: Response) => {
  const task = await assignTask(
    parseInt(req.params.id),
    parseInt(req.params.assigneeId)
  );
  res.status(200).json(task);
};
