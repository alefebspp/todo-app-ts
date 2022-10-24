import { useSelector, useDispatch } from 'react-redux';
import { getTodosStatus, fetchTodos } from './todosSlice';
import '../../App.css';
import { useEffect } from 'react';

import Tasks from './Tasks';
import { AppDispatch } from '../store';
const TodosList = () => {
  const todosStatus = useSelector(getTodosStatus);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (todosStatus == 'idle') {
      dispatch(fetchTodos());
    }
  }, [todosStatus, dispatch]);

  return <Tasks />;
};

export default TodosList;
