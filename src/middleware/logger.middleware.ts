import morgan from 'morgan';
import { logger } from '../services/logger.service';

export const loggerMiddleware = morgan('combined', {
  stream: {
    write: (message) => logger.http(message.trim()),
  },
});
