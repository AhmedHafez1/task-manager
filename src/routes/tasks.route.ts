import express from 'express';
import {
  assignTaskController,
  completeTaskController,
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  unCompleteTaskController,
  updateTaskController,
} from '../controllers/tasks.controller';

const router = express.Router();

router.get('/', getTasksController);
router.get('/:id', getTaskController);
router.post('', createTaskController);
router.put('/:id', updateTaskController);
router.delete('/:id', deleteTaskController);
router.patch('/:id/uncomplete', unCompleteTaskController);
router.patch('/:id/complete', completeTaskController);
router.patch('/:id/assign/:assigneeId', assignTaskController);

export default router;
