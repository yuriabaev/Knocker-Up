import { observable, action, computed } from 'mobx'
import taskStore from './tasks'
import { Task } from '../businessLogic/types'

class AppStore {
  @observable
  viewMode = VIEW_MODES.VIEW

  @observable
  transientTask

  @observable
  newAddedTask

  @action
  goToEditMode = (id) => {
    const taskInEdit = taskStore.tasks.find((_tsk) => _tsk.id === id)
    this.transientTask = new Task(taskInEdit)
  }

  @action
  goToViewMode = () => {
    this.viewMode = VIEW_MODES.VIEW
    this.transientTask = undefined
  }
  @action
  goToCreateMode = () => {
    this.transientTask = new Task()
    this.viewMode = VIEW_MODES.CREATE
  }
  @action
  onEditCardTaskName = (taskName) => {
    this.transientTask.setTaskName(taskName)
  }
  @action
  onTaskDescriptionChange = (description) => {
    this.transientTask.setDescription(description)
  }
  @action
  onRecurringTimeChange = (duration) => {
    this.transientTask.setRecurringDuration(duration)
  }

  @action
  onAlertTimeChange = (duration) => {
    this.transientTask.setAlertDuration(duration)
  }

  isInCreateMode = () => {return this.viewMode === VIEW_MODES.CREATE}

}

export const VIEW_MODES = {
  CREATE: 'create',
  VIEW: 'view',
  EDIT: 'edit'
}

const applicationStore = window.applicationStore = new AppStore()
export default applicationStore
