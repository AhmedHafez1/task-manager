import Redis from 'ioredis';

const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
});

redisClient.on('error', (error) => {
  console.error(error);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

export default redisClient;
