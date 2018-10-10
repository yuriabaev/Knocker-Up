import moment from 'moment'
import { observable, action, computed } from 'mobx'
import TasksList from '../components/TasksList/TasksList'

const uuidv4 = require('uuid/v4')

export class Task {
  id;
  @observable taskName;
  description;
  @observable notifyDuration;
  @observable recurring;
  @observable lastDone;
  @observable isActive;

  constructor (id, taskName, description, notifyDuration, recurring, lastDone, isActive) {
    if(id instanceof Task){
      this.init(id)
      return
    }

    this.init({id, taskName, description, notifyDuration, recurring, lastDone, isActive})
  }
  @action
  init ({id, taskName, description, notifyDuration, recurring, lastDone, isActive}) {
    this.id = id || uuidv4()
    this.taskName = taskName || ''
    this.description = description || ''
    this.notifyDuration = notifyDuration || Duration(1,TIME.WEEKS)
    this.recurring = recurring || Duration(1,TIME.MONTHS)
    this.lastDone = lastDone ? moment(lastDone) : undefined
    this.isActive = isActive || true
  }

  @action
  markAsDone () {
    this.lastDone = moment()
    this.isActive = false
  }

  @action
  markAsDone () {
    this.lastDone = moment()
    this.isActive = false
  }

  @action
  editTask (task) {
    this.init(task)
  }

  get daysLeft () {
    return this.isActive
  }
  @computed
  get dueDate () {
    return this.lastDone && moment(this.lastDone).add(this.recurring.number, this.recurring.time)
  }
  @action
  setTaskName(taskName){
    this.taskName = String(taskName).toLowerCase()
  }
  @action
  setRecurringDuration(duration){
    this.recurring = duration
  }

  @action
  setAlertDuration(duration){
    this.notifyDuration = duration
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