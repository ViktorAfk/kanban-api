import { Controller } from "../types/typedefs";
import * as todoService from "../services/todo.service";
import { Todo } from "../types/interface";

export const getTodos: Controller = async (req, res) => {
  const { boardId } = req.params;
  const { page } = req.query;

  const todos = await todoService.getAllFromCurrentBoard(
    boardId.toString(),
    page?.toString(),
  );
  res.status(200).send(todos);
};

export const addTodo: Controller = async (req, res) => {
  const todo: Todo = req.body;

  const newTodo = await todoService.createNewTodo(todo);
  res.status(201).send(newTodo);
};

export const patchTodo: Controller = async (req, res) => {
  const { id } = req.params;
  const currentTodo = req.body;

  const updatedTodo = await todoService.updateTodo(currentTodo, id);

  res.status(200).send(updatedTodo);
};

export const removeTodo: Controller = async (req, res) => {
  const { id } = req.params;
  await todoService.deleteTodo(id);
  res.sendStatus(204);
};
