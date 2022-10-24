export type Todo = {
  _id: string;
  task: string;
  done: boolean;
};

export interface TodoState {
  todos: Array<Todo>;
  status: string;
  error: any;
}

export type CreateTodoArguments = {
  task: string;
  done: boolean;
};

export type UpdateTodoArguments = {
  todoId: string;
  done: { done: boolean };
};

export type TodoContextType = {
  todo: string;
  setTodo: (newState: string) => void;
};
