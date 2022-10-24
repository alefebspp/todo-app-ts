import { ReactElement, ReactNode, useState } from 'react';
import { createContext } from 'react';
import { TodoContextType } from '../app/features/types';

const initialValue = {
  todo: '',
  setTodo: () => {}
};

export const TodoContext = createContext<TodoContextType>(initialValue);

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<string>(initialValue.todo);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
