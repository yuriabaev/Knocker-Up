import { getTaskById, updateTask } from '../data/tasks'
import moment from 'moment'

export const markTaskDone = (id) => {
  const task = getTaskById(id)
  task.lastDone = moment()
  console.log('task.lastDone2', task.lastDone.toISOString())
  updateTask(task)
}