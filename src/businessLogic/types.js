import moment from 'moment'
import { observable ,computed} from 'mobx'
const uuidv4 = require('uuid/v4')


export const Task = (id, taskName, description, alertBefore, recurring, lastDone, isActive) => {
  //return observable({
  return ({
    id: id || uuidv4(),
    taskName,
    description,
    alertBefore,
    recurring,
    lastDone: lastDone ? moment(lastDone) : undefined,
    isActive: isActive || true,

    // @computed get daysLeft(){
    //   return 'lll'
    //
    // },
    // @computed get dueDate(){
    //   return 'ddd'
    // }
  })
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