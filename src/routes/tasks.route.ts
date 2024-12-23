import express from 'express';
import {
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  updateTaskController,
} from '../controllers/tasks.controller';

const router = express.Router();

router.get('/', getTasksController);
router.get('/:id', getTaskController);
router.post('', createTaskController);
router.delete('/:id', deleteTaskController);
router.put('/:id', updateTaskController);

export default router;
