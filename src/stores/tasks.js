import { Duration, Task, TIME } from '../businessLogic/types'
import { observable, action } from 'mobx'

class ObservableTasksStore {

//TODO make tasks a map
  @observable
  tasks = [
    new Task(111, 'clean the car', 'with soap plz, it is really important', Duration(7, TIME.DAYS), Duration(6, TIME.MONTHS), '2018-08-17T10:02:18.674Z'),
    new Task(222, 'check car wheels', '', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS)),
    new Task(333, 'shinanint', ' check your teeth', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS))
  ]
  @observable
  idOfInViewMode;

  @action
  markTaskAsDone = (id) => {
    const index = this.tasks.findIndex((_tsk) => _tsk.id === id)
    this.tasks[index].markAsDone()
  }

  @action
  addTask = (task) => {
    return this.tasks.push(task)
  }

  @action
  editTask = (id, newTask) => {
    const index = this.tasks.findIndex((_tsk) => _tsk.id === id)
    this.tasks[index] = newTask

  }

  @action
  goToEditMode = (id) => {
    this.idOfInViewMode = id
  }

  @action
  goToViewMode = () => {
    this.idOfInViewMode = undefined
  }
}

const taskStore = window.store = new ObservableTasksStore()
export default taskStore
