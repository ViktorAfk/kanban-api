import exress from 'express';
import { addTodo, getTodos, patchTodo } from '../controllers/todo.controller';
const todoRouter = exress.Router();

todoRouter.get('/', getTodos);
todoRouter.post('/', addTodo);
todoRouter.patch('/:id', patchTodo);

export { todoRouter };
