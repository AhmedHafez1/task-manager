import prisma from "./prisma";
import bcrypt from "bcrypt";

const seed = async () => {
  await prisma.task.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        name: "Ahmed",
        email: "ahmed@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Mohamed",
        email: "mohamed@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Ali",
        email: "ali@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Omar",
        email: "omar@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Ibrahim",
        email: "ibrahim@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Abdullah",
        email: "abdullah@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Hassan",
        email: "hassan@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Mahmoud",
        email: "mahmoud@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Saad",
        email: "saad@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
      {
        name: "Amr",
        email: "amr@gmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
    ],
  });

  const users = await prisma.user.findMany({ take: 10 });

  await prisma.project.createMany({
    data: [
      {
        title: "Project 1",
        description: "Project description 1",
        ownerId: users[0].id,
      },
      {
        title: "Project 2",
        description: "Project description 2",
        ownerId: users[1].id,
      },
      {
        title: "Project 3",
        description: "Project description 3",
        ownerId: users[2].id,
      },
    ],
  });

  const projects = await prisma.project.findMany({ take: 3 });

  await prisma.task.createMany({
    data: [
      {
        title: "Task 1",
        description: "Create a new Todo list",
        completed: false,
        projectId: projects[0].id,
        assigneeId: users[3].id,
      },
      {
        title: "Task 2",
        description: "Implement a filter to sort tasks by completed",
        completed: false,
        projectId: projects[0].id,
        assigneeId: users[4].id,
      },
      {
        title: "Task 3",
        description: "Create a new blog post about Docker",
        completed: false,
        projectId: projects[0].id,
        assigneeId: users[5].id,
      },
      {
        title: "Task 4",
        description: "Read a new book about TypeScript",
        completed: false,
        projectId: projects[0].id,
        assigneeId: users[6].id,
      },
      {
        title: "Task 5",
        description: "Improve the performance of the web app",
        completed: false,
        projectId: projects[0].id,
        assigneeId: users[7].id,
      },
      {
        title: "Task 6",
        description: "Create a new page for displaying completed tasks",
        completed: false,
        projectId: projects[0].id,
        assigneeId: users[8].id,
      },
      {
        title: "Task 7",
        description: "Add a new feature to the web app",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[9].id,
      },
      {
        title: "Task 8",
        description: "Create a new route for displaying completed tasks",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[3].id,
      },
      {
        title: "Task 9",
        description: "Create a new component for displaying completed tasks",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[4].id,
      },
      {
        title: "Task 10",
        description: "Write unit tests for the new feature",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[5].id,
      },
      {
        title: "Task 11",
        description: "Deploy the application to production",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[6].id,
      },
      {
        title: "Task 12",
        description: "Refactor the existing codebase for performance",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[7].id,
      },
      {
        title: "Task 13",
        description: "Design a new logo for the application",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[8].id,
      },
      {
        title: "Task 14",
        description: "Research new technologies for the project",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[9].id,
      },
      {
        title: "Task 15",
        description: "Conduct a survey for user feedback",
        completed: false,
        projectId: projects[2].id,
        assigneeId: users[5].id,
      },
      {
        title: "Task 16",
        description: "Optimize the database queries",
        completed: false,
        projectId: projects[2].id,
        assigneeId: users[7].id,
      },
      {
        title: "Task 17",
        description: "Create a user manual for the application",
        completed: false,
        projectId: projects[2].id,
        assigneeId: users[9].id,
      },
      {
        title: "Task 18",
        description: "Schedule a team meeting to discuss progress",
        completed: false,
        projectId: projects[2].id,
        assigneeId: users[3].id,
      },
      {
        title: "Task 19",
        description: "Prepare a presentation for stakeholders",
        completed: false,
        projectId: projects[2].id,
        assigneeId: users[7].id,
      },
      {
        title: "Task 20",
        description: "Implement a new authentication system",
        completed: false,
        projectId: projects[1].id,
        assigneeId: users[3].id,
      },
    ],
  });

  console.log("Data seeded successfully!");
};

seed()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
