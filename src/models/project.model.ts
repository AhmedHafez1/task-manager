import { Task } from "./task.model";
import { User } from "./user.model";

export interface Project {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  tasks?: Task[];
  ownerId: number;
  owner?: User;
}
