import express from "express";
import { connectDB } from "./db";
import { todoRouter } from "./routes/todo.route";
import cors from "cors";

const server = async () => {
  const PORT = 3001;
  const app = express();
  const defalult_Url = "http://localhost:5173";
  const CLIENT_URL = "https://viktorafk.github.io";
  app.use(
    cors({
      origin: [CLIENT_URL, defalult_Url],
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
