// Seed 10 items from export interface Task {
//   id?: number;
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

import prisma from './prisma';

const seed = async () => {
  await prisma.task.deleteMany();
  const tasks = await prisma.task.createMany({
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
};

seed()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
