import { getTaskById, updateTask } from '../api/tasks'
import moment from 'moment'

export const markTaskDone = (id) => {
  const task = getTaskById(id)
  task.lastDone = moment()
  updateTask(task)
}