import express from 'express';
import tasksRoute from './routes/tasks.route';
import usersRoute from './routes/users.route';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('App is running');
});

app.use('/tasks', tasksRoute);
app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
