import express from 'express';
import tasksRoute from './routes/tasks.route';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/tasks', tasksRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
