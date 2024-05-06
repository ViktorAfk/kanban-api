import express from "express";
import { connectDB } from "./db";
import { todoRouter } from "./routes/todo.route";
import cors from "cors";

const server = async () => {
  const PORT = 3001;
  const app = express();
  const CLIENT_URL = "http://localhost:5173";
  app.use(
    cors({
      origin: [CLIENT_URL],
    }),
  );
  app.use("/todos", express.json(), todoRouter);

  await connectDB();
  app.listen(PORT, () =>
    console.log(`API is ready on http://localhost:${PORT}`),
  );
  return app;
};

server();
