import { Controller } from '../typedefs';
import * as todoService from '../services/todo.service';
import { Error } from 'mongoose';

export const getTodos: Controller = async (req, res) => {
  const { board, page } = req.query;
  try {
    if (!board) {
      throw new Error('There is no board id');
    }
    const todos = await todoService.getAllFromCurrentBoard(
      board.toString(),
      page?.toString(),
    );
    res.status(200).send(todos);
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message)
  }
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

  const updatedTodo = await todoService.updateTodo(currentTodo, id);

  res.status(200).send(updatedTodo);
};

export const removeTodo: Controller = async (req, res) => {
  const { id } = req.params;
  await todoService.deleteTodo(id);
  res.sendStatus(204);
};
