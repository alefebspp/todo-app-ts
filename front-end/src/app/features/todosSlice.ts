import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import {
  CreateTodoArguments,
  Todo,
  TodoState,
  UpdateTodoArguments
} from './types';
const TODO_URL = 'http://localhost:3333';
const initialState: TodoState = {
  todos: [],
  status: 'idle',
  error: null
};

export const fetchTodos = createAsyncThunk('posts/fetchTodos', async () => {
  try {
    const response = await axios.get(`${TODO_URL}` + `/all`);
    return response.data;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
  }
});

export const createTodo = createAsyncThunk(
  'posts/createTodos',
  async (todo: CreateTodoArguments) => {
    try {
      const response = await axios.post(`${TODO_URL}` + `/create`, todo);
      return response.data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'posts/deleteTodos',
  async (todoId: string) => {
    try {
      const response = await axios.delete(
        `${TODO_URL}` + `/delete/` + `${todoId}`
      );
      return response.data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
    }
  }
);
export const updateTodo = createAsyncThunk(
  'posts/updateTodos',
  async (data: UpdateTodoArguments) => {
    const { todoId, done } = data;
    try {
      const response = await axios.patch(
        `${TODO_URL}` + `/update/` + `${todoId}`,
        done
      );
      console.log(response);
      return response.data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
    }
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const loadedTodos = action.payload.map((todos: Todo) => {
          return todos;
        });

        state.todos = loadedTodos;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action: AnyAction) => {
        state.todos = state.todos.filter(todos =>
          todos._id !== action.meta.arg ? todos : ''
        );
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        console.log(action.meta.arg);
        state.todos.map(todos => {
          if (todos.done == true) {
            todos._id == action.meta.arg.todoId ? (todos.done = false) : '';
          } else {
            todos._id == action.meta.arg.todoId ? (todos.done = true) : '';
          }
        });
      });
  }
});

export const selectAllTodos = (state: RootState) => state.todos.todos;
export const getTodosStatus = (state: RootState) => state.todos.status;
export const getTodosError = (state: RootState) => state.todos.error;
export default todosSlice.reducer;
