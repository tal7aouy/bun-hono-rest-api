import { Document, Schema, model } from 'mongoose'

interface ITask {
  title: string
  description: string
  user_id: number
}

interface ITaskDoc extends ITask, Document {
}

const taskSchema = new Schema<ITaskDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user_ud: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const Task = model('Task', taskSchema)
export default Task
