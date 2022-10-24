import { Router } from 'express'
import TodoController from '../controller/TodoController'

const routes = Router()

routes.get('/all', TodoController.index)
routes.post('/create', TodoController.createTodo)
routes.delete('/delete/:id', TodoController.deleteTodo)
routes.patch('/update/:id', TodoController.updateTodo)
export default routes
