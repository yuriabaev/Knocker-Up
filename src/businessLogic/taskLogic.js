import { getTaskById, updateTask } from '../api/tasks'
import moment from 'moment'
import tasksStore from '../stores/tasks'

let tasks = tasksStore.tasks

export const markTaskDone = (id) => {
  const index = tasks.findIndex((_tsk) => _tsk.id === id)
  tasksStore.tasks[index].lastDone = moment()
}