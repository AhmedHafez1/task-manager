"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_controller_1 = require("../controllers/tasks.controller");
const router = express_1.default.Router();
router.get('/', tasks_controller_1.getTasksController);
router.get('/:id', tasks_controller_1.getTaskController);
router.post('', tasks_controller_1.createTaskController);
router.delete('/:id', tasks_controller_1.deleteTaskController);
router.put('/:id', tasks_controller_1.updateTaskController);
exports.default = router;
