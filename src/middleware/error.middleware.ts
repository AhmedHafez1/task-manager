import { NextFunction, Request, Response } from "express";
import { AppError } from "./app.error";

const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message, status });
};

export default errorMiddleware;