import { Hono } from 'hono'
import { task } from '../controllers'
import { isAdmin, protect } from '../middlewares'

const tasks = new Hono()

// Get All Tasks
tasks.get('/', protect, isAdmin, (c) => task.getTasks(c))

export default tasks
