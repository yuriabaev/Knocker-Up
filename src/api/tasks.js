import  taskStore  from '../stores/tasks'
import { Task, TIME } from '../businessLogic/types'
// const tasks = [
//   Task(444, 'db:clean the car', 'with soap plz, it is really important', Duration(7, TIME.DAYS), Duration(6, TIME.MONTHS), '2018-08-17T10:02:18.674Z'),
//   Task(555, 'db:check car wheels', '', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS)),
//   Task(666, 'db:shinanint', ' check your teeth', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS))
// ]
// export const getTasks = () => {
//   //return tasks
// }
// export const createTask = (task) => {
//   //return tasks.push(task)
// }
//
// export const updateTask = (updatedTask) => {
//   const index = taskStore.tasks.findIndex((_tsk) => _tsk.id === updatedTask.id)
// console.log('taskStore.tasks[index]',taskStore.tasks[index])
//
//   //return taskStore.tasks.push(updatedTask)
//   return taskStore.tasks[index] = updatedTask
// }
// export const getTaskById = (id) => {
//   return taskStore.tasks.filter((task) => task.id === id)[0]
// }