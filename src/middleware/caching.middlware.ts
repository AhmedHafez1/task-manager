import { NextFunction, Request, Response } from 'express';
import redisClient from '../services/redis.service';

const cacheMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cache = await redisClient.get(req.url);

  if (cache) {
    res.send(cache);
  } else {
    next();
  }
};

export default cacheMiddleware;
