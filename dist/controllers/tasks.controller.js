"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskController = exports.deleteTaskController = exports.getTaskController = exports.getTasksController = exports.createTaskController = void 0;
const tasks_service_1 = require("../services/tasks.service");
const createTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield (0, tasks_service_1.createTask)(req.body);
    res.status(201).json(task);
});
exports.createTaskController = createTaskController;
const getTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield (0, tasks_service_1.getTasks)();
    res.status(200).json(tasks);
});
exports.getTasksController = getTasksController;
const getTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield (0, tasks_service_1.getTask)(parseInt(req.params.id));
    res.status(200).json(task);
});
exports.getTaskController = getTaskController;
const deleteTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, tasks_service_1.deleteTask)(parseInt(req.params.id));
    res.sendStatus(204);
});
exports.deleteTaskController = deleteTaskController;
const updateTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield (0, tasks_service_1.updateTask)(parseInt(req.params.id), req.body);
    res.status(200).json(task);
});
exports.updateTaskController = updateTaskController;
