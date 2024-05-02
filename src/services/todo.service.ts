import { TodoModel } from '../models/Todo';
interface Todo {
  title: string;
  body: string;
  status: string;
  boardId: string;
}
export const getAll = async () => {
  const todos = await TodoModel.find();
  return todos;
};

export const createNewTodo = async (todoForCreating: Todo) => {
  const newTodo = new TodoModel({
    ...todoForCreating,
  });

  const response = await TodoModel.create(newTodo);

  return response;
};

export const updateTodo = async (todoForUpdate: Todo, todoId: string) => {
  const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, {
    $set: {
      ...todoForUpdate,
    },
  });

  return updatedTodo;
};
