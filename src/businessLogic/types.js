import moment from 'moment'

const uuidv4 = require('uuid/v4')

export const Task = (id, taskName, description, notifyDuration, recurring, lastDone, isActive) => {
    return {
    id: id || uuidv4(),
    taskName,
    description,
    notifyDuration,
    recurring,
    lastDone: lastDone ? moment(lastDone) : undefined,
    isActive: isActive || true,



    get daysLeft () {
      return this.isActive

    },
    get dueDate(){
    //  console.log('duedate',this.lastDone , this.lastDone && this.lastDone.add(recurring.number,recurring.time),this.lastDone && this.lastDone.add(recurring.number,recurring.time))
      return this.lastDone && moment(this.lastDone).add(recurring.number,recurring.time)
    }
  }
}

export const Duration = (number, time) => {
  return {
    number, time
  }
}

export const TIME = {
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years'
}