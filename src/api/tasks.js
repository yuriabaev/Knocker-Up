import { taskStore } from '../stores/tasks'
import { Period, Task, TIME } from '../businessLogic/types'
const tasks = [
  Task(444, 'db:clean the car', 'with soap plz, it is really important', Period(7, TIME.DAYS), Period(6, TIME.MONTH), '2018-08-17T10:02:18.674Z'),
  Task(555, 'db:check car wheels', '', Period(2, TIME.DAYS), Period(1, TIME.MONTH)),
  Task(666, 'db:shinanint', ' check your teeth', Period(2, TIME.DAYS), Period(1, TIME.MONTH))
]
export const getTasks = () => {
  return tasks
}
export const createTask = (task) => {
  return tasks.push(task)
}

export const updateTask = (updatedTask) => {
  const index = tasks.findIndex((_tsk) => _tsk.id === updatedTask.id)

  return tasks[index] = updatedTask
}
export const getTaskById = (id) => {
  return tasks.filter((task) => task.id === id)[0]
}