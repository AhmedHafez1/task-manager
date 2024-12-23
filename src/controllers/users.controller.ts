import { Request, Response } from "express";
import { login, signup } from "../services/users.service";

export const loginController = async (req: Request, res: Response) => {
  const userData = await login(req.body.email, req.body.password);

  if (!userData) {
    res.sendStatus(401);
    return;
  }

  res.status(200).json(userData);
};

export const signupController = async (req: Request, res: Response) => {
  const userData = await signup(req.body.user);

  res.status(201).json(userData);
};
