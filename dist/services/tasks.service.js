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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
const prisma_1 = __importDefault(require("../data/prisma"));
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield prisma_1.default.task.findMany();
    return tasks;
});
exports.getTasks = getTasks;
const getTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.task.findUnique({ where: { id } });
    return;
});
exports.getTask = getTask;
const createTask = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.task.create({ data });
    return task;
});
exports.createTask = createTask;
const updateTask = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.task.update({ where: { id }, data });
    return task;
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.task.delete({ where: { id } });
    return task;
});
exports.deleteTask = deleteTask;
