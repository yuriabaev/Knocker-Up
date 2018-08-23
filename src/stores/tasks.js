import { Period, Task, TIME } from '../businessLogic/types'
import { autorun, decorate, observable, computed } from 'mobx'

class ObservableTasksStore {
  tasks = [
    // Task(111, 'clean the car', 'with soap plz, it is really important', Period(7, TIME.DAYS), Period(6, TIME.MONTH), '2018-08-17T10:02:18.674Z'),
    // Task(222, 'check car wheels', '', Period(2, TIME.DAYS), Period(1, TIME.MONTH)),
    // Task(333, 'shinanint', ' check your teeth', Period(2, TIME.DAYS), Period(1, TIME.MONTH))
  ]

  addTask = (task) => {
    return this.tasks.push(task)
  }

  get tasks () {
    return this.tasks.length
  }

  set tasks (_tasks) {
    this.tasks = _tasks
  }

}

decorate(ObservableTasksStore, {
  tasks: observable,
  completedTodosCount: computed
})

export const taskStore = new ObservableTasksStore()

