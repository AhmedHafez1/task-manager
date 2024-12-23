import prisma from "./prisma";

const seed = async () => {
  const task = await prisma.task.findFirst();
  const user = await prisma.user.findFirst();
  const project = await prisma.project.findFirst();

  !user &&
    (await prisma.user.createMany({
      data: [
        {
          name: "Ahmed",
          email: "ahmed@gmail.com",
          password: "123456",
        },
        {
          name: "Mohamed",
          email: "mohamed@gmail.com",
          password: "123456",
        },
        {
          name: "Ali",
          email: "ali@gmail.com",
          password: "123456",
        },
        {
          name: "Omar",
          email: "omar@gmail.com",
          password: "123456",
        },
        {
          name: "Ibrahim",
          email: "ibrahim@gmail.com",
          password: "123456",
        },
        {
          name: "Abdullah",
          email: "abdullah@gmail.com",
          password: "123456",
        },
        {
          name: "Hassan",
          email: "hassan@gmail.com",
          password: "123456",
        },
        {
          name: "Mahmoud",
          email: "mahmoud@gmail.com",
          password: "123456",
        },
        {
          name: "Saad",
          email: "saad@gmail.com",
          password: "123456",
        },
        {
          name: "Amr",
          email: "amr@gmail.com",
          password: "123456",
        },
      ],
    }));

  !project &&
    (await prisma.project.createMany({
      data: [
        {
          title: "Project 1",
          description: "Project description 1",
          ownerId: 1,
        },
        {
          title: "Project 2",
          description: "Project description 2",
          ownerId: 2,
        },
        {
          title: "Project 3",
          description: "Project description 3",
          ownerId: 3,
        },
      ],
    }));

  !task &&
    (await prisma.task.createMany({
      data: [
        {
          title: "Task 1",
          description: "Create a new Todo list",
          completed: false,
          projectId: 1,
          assigneeId: 1,
        },
        {
          title: "Task 2",
          description: "Implement a filter to sort tasks by completed",
          completed: false,
          projectId: 1,
          assigneeId: 2,
        },
        {
          title: "Task 3",
          description: "Create a new blog post about Docker",
          completed: false,
          projectId: 1,
          assigneeId: 3,
        },
        {
          title: "Task 4",
          description: "Read a new book about TypeScript",
          completed: false,
          projectId: 1,
          assigneeId: 4,
        },
        {
          title: "Task 5",
          description: "Improve the performance of the web app",
          completed: false,
          projectId: 2,
          assigneeId: 5,
        },
        {
          title: "Task 6",
          description: "Create a new page for displaying completed tasks",
          completed: false,
          projectId: 2,
          assigneeId: 6,
        },
        {
          title: "Task 7",
          description: "Add a new feature to the web app",
          completed: false,
          projectId: 2,
          assigneeId: 7,
        },
        {
          title: "Task 8",
          description: "Create a new route for displaying completed tasks",
          completed: false,
          projectId: 2,
          assigneeId: 8,
        },
        {
          title: "Task 9",
          description: "Create a new component for displaying completed tasks",
          completed: false,
          projectId: 3,
          assigneeId: 9,
        },
        {
          title: "Task 10",
          description: "Write unit tests for the new feature",
          completed: false,
          projectId: 3,
          assigneeId: 10,
        },
        {
          title: "Task 11",
          description: "Deploy the application to production",
          completed: false,
          projectId: 3,
          assigneeId: 3,
        },
        {
          title: "Task 12",
          description: "Refactor the existing codebase for performance",
          completed: false,
          projectId: 1,
          assigneeId: 4,
        },
        {
          title: "Task 13",
          description: "Design a new logo for the application",
          completed: false,
          projectId: 2,
          assigneeId: 5,
        },
        {
          title: "Task 14",
          description: "Research new technologies for the project",
          completed: false,
          projectId: 1,
          assigneeId: 8,
        },
        {
          title: "Task 15",
          description: "Conduct a survey for user feedback",
          completed: false,
          projectId: 2,
          assigneeId: 9,
        },
        {
          title: "Task 16",
          description: "Optimize the database queries",
          completed: false,
          projectId: 3,
          assigneeId: 5,
        },
        {
          title: "Task 17",
          description: "Create a user manual for the application",
          completed: false,
          projectId: 3,
          assigneeId: 1,
        },
        {
          title: "Task 18",
          description: "Schedule a team meeting to discuss progress",
          completed: false,
          projectId: 2,
          assigneeId: 5,
        },
        {
          title: "Task 19",
          description: "Prepare a presentation for stakeholders",
          completed: false,
          projectId: 1,
          assigneeId: 7,
        },
        {
          title: "Task 20",
          description: "Implement a new authentication system",
          completed: false,
          projectId: 2,
          assigneeId: 6,
        },
      ],
    }));

  console.log("Data seeded successfully!");
};

seed()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
