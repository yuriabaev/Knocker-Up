const uuidv4 = require('uuid/v4');

const Task = (id,taskName, description, alertBefore, recurring, lastDone,isActive) => {
  return {
    id:id || uuidv4(),
    taskName,
    description,
    alertBefore,
    recurring,
    lastDone,
    isActive: isActive || true
  }
}

const Period = (number, period) => {
  return {
    number, period
  }
}

const TIME = {
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTH: 'month',
  YEARS: 'years'
}

const tasks = [
  Task(111,'clean the car', 'with soap plz, it is really important', Period(7, TIME.DAYS), Period(6, TIME.MONTH)),
  Task(222,'check car wheels', '', Period(2, TIME.DAYS), Period(1, TIME.MONTH)),
  Task(333,'shinanint', ' check your teeth', Period(2, TIME.DAYS), Period(1, TIME.MONTH))
]

export const getTasks = () => {
  return tasks
}
export const createTask = (task) => {
  return tasks.push(task)
}
export const getTaskById = (id) => {
  return tasks.filter((task)=>task.id=id)
}