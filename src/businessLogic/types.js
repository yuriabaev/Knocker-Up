import moment from 'moment'
import { observable, action, computed } from 'mobx'

const uuidv4 = require('uuid/v4')

export class Task {
  id;
  taskName;
  description;
  notifyDuration;
  recurring;
  @observable lastDone;
  @observable isActive;

  constructor (id, taskName, description, notifyDuration, recurring, lastDone, isActive) {
    this.id = id || uuidv4()
    this.taskName = taskName
    this.description = description
    this.notifyDuration = notifyDuration
    this.recurring = recurring
    this.lastDone = lastDone ? moment(lastDone) : undefined
    this.isActive = isActive || true
  }

  @action
  markAsDone () {
    this.lastDone = moment()
    this.isActive = false
  }

  @action
  editTask (task) {
    // TODO Object.assign
    this.id = task.id
    this.taskName = task.taskName
    this.description = task.description
    this.notifyDuration = task.notifyDuration
    this.recurring = task.recurring
    this.lastDone = task.lastDone
    this.isActive = task.isActive
  }

  get daysLeft () {
    return this.isActive
  }
  @computed
  get dueDate () {
    return this.lastDone && moment(this.lastDone).add(this.recurring.number, this.recurring.time)
  }
}

export const Duration = (number, time) => {
  return {
    number, time
  }
}

export const TIME = {
  SECONDS: 'seconds',
  MINUTES: 'minutes',
  HOURS: 'hours',
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years'
}