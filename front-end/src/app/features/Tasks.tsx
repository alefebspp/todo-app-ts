import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllTodos,
  getTodosStatus,
  getTodosError,
  deleteTodo
} from './todosSlice';
import useTodo from '../../hooks/useTodo';
import CompletedTask from './CompletedTask';
import TodoTask from './TodoTask';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { AppDispatch } from '../store';

const Tasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);
  const todosStatus = useSelector(getTodosStatus);
  const todosError = useSelector(getTodosError);
  const { handleUpdateTodo } = useTodo();

  let content;

  if (todosStatus == 'loading') {
    content = <p>loading...</p>;
  } else if (todosStatus == 'succeeded') {
    const renderedTodo = todos.map(todo => {
      return (
        <div className="single-todo">
          {todo.done == true ? (
            <CompletedTask
              todo={todo}
              onClickFunction={handleUpdateTodo}
              onClickParam={todo}
            />
          ) : (
            <TodoTask
              todo={todo}
              onClickFunction={handleUpdateTodo}
              onClickParam={todo}
            />
          )}

          <IconButton
            colorScheme="teal"
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={() => dispatch(deleteTodo(todo._id))}
          />
        </div>
      );
    });
    content = renderedTodo;
  } else if (todosStatus == 'failed') {
    content = <p>failed...</p>;
  }

  return <div className="todos">{content}</div>;
};

export default Tasks;
