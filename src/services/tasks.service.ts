import { Task } from '@prisma/client';
import prisma from '../data/prisma';

export const getTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

export const getTask = async (id: number) => {
  const task = await prisma.task.findUnique({ where: { id } });
  return;
};

export const createTask = async (data: Task) => {
  const task = await prisma.task.create({ data });
  return task;
};

export const updateTask = async (id: number, data: Task) => {
  const task = await prisma.task.update({ where: { id }, data });
  return task;
};

export const deleteTask = async (id: number) => {
  const task = await prisma.task.delete({ where: { id } });
  return task;
};
