import { Project } from "./project.model";

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  assigneeId: number;
  projectId: number;
  project: Project
  createdAt?: Date;
  updatedAt?: Date;
}
