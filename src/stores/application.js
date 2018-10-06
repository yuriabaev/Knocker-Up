import { observable, action } from 'mobx'
import taskStore from './tasks'
import { Task } from '../businessLogic/types'

class AppStore {
  @observable
  viewMode = 'view'

  @observable
  transientTask

  @action
  goToEditMode = (id) => {
    const taskInEdit = taskStore.tasks.find((_tsk) => _tsk.id === id)
    this.transientTask = new Task(taskInEdit)
  }

  @action
  goToViewMode = () => {
    this.transientTask = undefined
  }
  @action
  onEditCardTaskName = (taskName) => {
    this.transientTask.setTaskName(taskName)
  }
  @action
  onRecurringTimeChange = (time) => {
    this.transientTask.setRecurringTime(time)
  }

}

const applicationStore = window.applicationStore = new AppStore()
export default applicationStore
