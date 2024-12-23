"use strict";
// Seed 10 items from export interface Task {
//   id?: number;
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt?: Date;
//   updatedAt?: Date;
// }
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
const prisma_1 = __importDefault(require("./prisma"));
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.task.deleteMany();
    const tasks = yield prisma_1.default.task.createMany({
        data: [
            {
                title: 'Task 1',
                description: 'Create a new Todo list',
                completed: false,
            },
            {
                title: 'Task 2',
                description: 'Implement a filter to sort tasks by completed',
                completed: false,
            },
            {
                title: 'Task 3',
                description: 'Create a new blog post about Docker',
                completed: false,
            },
            {
                title: 'Task 4',
                description: 'Read a new book about TypeScript',
                completed: false,
            },
            {
                title: 'Task 5',
                description: 'Improve the performance of the web app',
                completed: false,
            },
            {
                title: 'Task 6',
                description: 'Create a new page for displaying completed tasks',
                completed: false,
            },
            {
                title: 'Task 7',
                description: 'Add a new feature to the web app',
                completed: false,
            },
            {
                title: 'Task 8',
                description: 'Create a new route for displaying completed tasks',
                completed: false,
            },
            {
                title: 'Task 9',
                description: 'Create a new component for displaying completed tasks',
                completed: false,
            },
            {
                title: 'Task 10',
                description: 'Improve the design of the web app',
                completed: false,
            },
        ],
    });
    console.log(tasks.count, 'tasks seeded successfully!');
});
seed()
    .then(() => prisma_1.default.$disconnect())
    .catch((e) => {
    console.error(e);
    prisma_1.default.$disconnect();
    process.exit(1);
});
