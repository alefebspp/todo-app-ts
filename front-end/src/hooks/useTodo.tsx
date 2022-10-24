import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, updateTodo } from '../app/features/todosSlice';
import { Todo } from '../app/features/types';
import { AppDispatch } from '../app/store';
import { TodoContext } from '../contexts/TodoContext';

const useTodo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { setTodo } = useContext(TodoContext);

  const handleCreateTodo = (todo: string) => {
    if (todo) {
      dispatch(
        createTodo({
          task: todo,
          done: false
        })
      );
      setTodo('');
    }
  };

  function handleUpdateTodo(task: Todo) {
    if (task.done == false) {
      dispatch(updateTodo({ todoId: task._id, done: { done: true } }));
    } else {
      dispatch(updateTodo({ todoId: task._id, done: { done: false } }));
    }
  }

  return { handleCreateTodo, handleUpdateTodo };
};

export default useTodo;
