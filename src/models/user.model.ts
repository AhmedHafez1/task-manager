import { Project } from "./project.model";
import { Task } from "./task.model";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  tasks?: Task[];
  projects?: Project[];
}
