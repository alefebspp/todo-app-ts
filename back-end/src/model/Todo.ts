import { Schema, model } from 'mongoose'

interface ITodo {
  task: string
  done: boolean
}

const todoSchema = new Schema<ITodo>({
  task: { type: String, required: true },
  done: { type: Boolean, required: true }
})

export const Todo = model<ITodo>('Todo', todoSchema)
