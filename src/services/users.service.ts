import bcrypt from "bcrypt";
import prisma from "../data/prisma";
import { sign } from "jsonwebtoken";
import { User } from "../models/user.model";

export const signup = async (user: User) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: { email: user.email, name: user.name, password: hashedPassword },
  });
  const token = sign(
    { id: newUser.id, email: newUser.email },
    process.env.JWT_SECRET!
  );

  const userToReturn: Partial<User> = {
    email: newUser.email,
    name: newUser.name,
    id: newUser.id,
  };

  return { token, user: userToReturn };
};

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return null;
  }

  const result = await bcrypt.compare(password, user.password);
  if (!result) return null;

  const token = sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!
  );

  const userToReturn: Partial<User> = {
    email: user.email,
    name: user.name,
    id: user.id,
  };

  return { token, user: userToReturn };
};
