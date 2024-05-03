import exress from 'express';
import {
  addTodo,
  getTodos,
  patchTodo,
  removeTodo,
} from '../controllers/todo.controller';

const todoRouter = exress.Router();

todoRouter.get('/', getTodos);
todoRouter.post('/', addTodo);
todoRouter.patch('/:id', patchTodo);
todoRouter.delete('/:id', removeTodo);

export { todoRouter };
