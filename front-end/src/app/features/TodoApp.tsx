import TodosList from './TodosList';
import CreateTodo from './CreateTodo';
import '../../App.css';
import TodoContextProvider from '../../contexts/TodoContext';
const TodoApp = () => {
  return (
    <div className="todo">
      <TodoContextProvider>
        <CreateTodo />
        <TodosList />
      </TodoContextProvider>
    </div>
  );
};

export default TodoApp;
