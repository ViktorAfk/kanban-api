import { Controller } from '../typedefs';
import * as todoService from '../services/todo.service';

export const getTodos: Controller = async (req, res) => {
  try {
    const todos = await todoService.getAll();
    res.status(200).send(todos);
  } catch (error) {
    console.log(error);
  }
};

export const addTodo: Controller = async (req, res) => {
  try {
    const { title, body, status, boardId } = req.body;

    const newTodo = await todoService.createNewTodo({
      title,
      body,
      status,
      boardId,
    });
    res.status(201).send(newTodo);
  } catch (error) {
    console.log(error);
  }
};

export const patchTodo: Controller = async (req, res) => {
  try {
    const { id } = req.params;
    const currentTodo = req.body;

    const updatedTodo = await todoService.updateTodo(currentTodo, id);

    res.status(200).send(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};

export const removeTodo: Controller = async (req, res) => {
  try {
    const { id } = req.params;
    await todoService.deleteTodo(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
