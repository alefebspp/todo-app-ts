import { Request, Response } from 'express';
import { Todo } from '../model/Todo';

export default {
  async index(req: Request, res: Response) {
    try {
      const todo = await Todo.find();
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async createTodo(req: Request, res: Response) {
    const { task, done } = req.body;
    const todo = new Todo({
      task: task,
      done: done
    });
    try {
      await todo.save();
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(400).json(console.log(error));
    }
  },

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(400).json('Tarefa não encontrada');
    }
    try {
      const deleteTodo = await Todo.deleteOne({ _id: id });
      return res.status(201).json(deleteTodo);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { done } = req.body;
    const newTask = {
      done: done
    };
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(400).json('Tarefa não encontrada');
    }
    try {
      const updateTodo = await Todo.updateOne({ _id: id }, newTask);
      return res.status(201).json(updateTodo);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};
