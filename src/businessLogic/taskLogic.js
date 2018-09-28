import { getTaskById, updateTask } from '../api/tasks'
import moment from 'moment'
import tasksStore from '../stores/tasks'

let tasks = tasksStore.tasks

export const markTaskDone = (id) => {
  const index = tasks.findIndex((_tsk) => _tsk.id === id)
  console.log('tasksStore.tasks[index].lastDone',tasksStore.tasks[index].lastDone,'moment()',moment())
  tasksStore.tasks[index].lastDone = moment()
  console.log('tasksStore.tasks[index].lastDone2',tasksStore.tasks[index].lastDone)
  tasksStore.tasks[index].isActive = false;
}