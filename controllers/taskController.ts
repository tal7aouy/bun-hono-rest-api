import { Context } from 'hono'
import { Task } from '../models'

/**
 * @api {get} /tasks Get All Tasks
 * @apiGroup Tasks
 * @access Private
 */
export const getTasks = async (c: Context) => {
  const tasks = await Task.find()

  return c.json({ tasks })
}
