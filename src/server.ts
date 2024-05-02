import 'dotenv/config';
import express from 'express';
import { connectDB } from './db';
import { todoRouter } from './routes/todo.route';
import cors from 'cors';

const server = async () => {
  const PORT = 3000;
  const app = express();
  app.use(cors());
  app.use('/todos', express.json(), todoRouter);

  await connectDB();

  app.listen(PORT, () =>
    console.log(`API is ready on http://localhost:${PORT}`),
  );
};

server();
