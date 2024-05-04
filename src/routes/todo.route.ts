import exress from "express";
import {
  addTodo,
  getTodos,
  patchTodo,
  removeTodo,
} from "../controllers/todo.controller";
import {
  catchError,
  checkPostReqBody,
  checkRequestBody,
} from "../midleware/midlewares";

const todoRouter = exress.Router();

todoRouter.get("/:boardId", getTodos);
todoRouter.post("/", checkPostReqBody, addTodo);
todoRouter.patch("/:id", checkRequestBody, patchTodo);
todoRouter.delete("/:id", removeTodo);
todoRouter.use(catchError);

export { todoRouter };
