import { Controller } from '../typedefs';
import * as todoService from '../services/todo.service';

export const getTodos: Controller = async (req, res) => {
  const todos = await todoService.getAll();
  res.status(200).send(todos);
};

export const addTodo: Controller = async (req, res) => {
  const { title, body, status, boardId } = req.body;

  const newTodo = await todoService.createNewTodo({
    title,
    body,
    status,
    boardId,
  });
  res.status(201).send(newTodo);
};

export const patchTodo: Controller = async (req, res) => {
  const { id } = req.params;
  const currentTodo = req.body;
  console.log(currentTodo);
  const updatedTodo = await todoService.updateTodo(currentTodo, id);
  res.status(204).send(updatedTodo);
};
