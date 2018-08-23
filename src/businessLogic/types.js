import moment from 'moment'
const uuidv4 = require('uuid/v4')

export const Task = (id, taskName, description, alertBefore, recurring, lastDone, isActive) => {
  return {
    id: id || uuidv4(),
    taskName,
    description,
    alertBefore,
    recurring,
    lastDone: lastDone ? moment(lastDone) : undefined,
    isActive: isActive || true
  }
}

export const Period = (number, period) => {
  return {
    number, period
  }
}

export const TIME = {
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTH: 'month',
  YEARS: 'years'
}