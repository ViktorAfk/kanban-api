import { TodoModel } from '../models/Todo';
import { Todo } from '../types/interface';
import { calculatePages } from '../utilities/utilities';

export const getAllFromCurrentBoard = async (
  boardId: string,
  page?: string,
) => {
  const todosPerPage = 9;
  const currentPage = page || '1';

  const todos = await TodoModel.find(
    { boardId },
    'id title body boardId status',
  )
    .skip(todosPerPage * Number(currentPage) - todosPerPage)
    .limit(todosPerPage)
    .exec();

  const count = await TodoModel.countDocuments({ boardId });

  const { previousPage, nextPage } = calculatePages(
    currentPage,
    count,
    todosPerPage,
  );
  return {
    count,
    todos,
    previousPage,
    nextPage,
  };
};

export const createNewTodo = async (todoForCreating: Todo) => {
  const newTodo = new TodoModel({
    ...todoForCreating,
  });

  const response = await TodoModel.create(newTodo);

  return response;
};

export const updateTodo = async (todoForUpdate: Todo, todoId: string) => {
  const updatedTodo = await TodoModel.findByIdAndUpdate(
    todoId,
    {
      ...todoForUpdate,
    },
    { returnDocument: 'after' },
  );

  return updatedTodo;
};


export const deleteTodo = async (todoId: string) => {
  await TodoModel.findByIdAndDelete(todoId);
};
