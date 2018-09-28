import { Duration, Task, TIME } from '../businessLogic/types'
import { autorun, decorate, observable, computed } from 'mobx'

class ObservableTasksStore {
  @observable
  tasks = [
    Task(111, 'clean the car', 'with soap plz, it is really important', Duration(7, TIME.DAYS), Duration(6, TIME.MONTHS), '2018-08-17T10:02:18.674Z'),
    Task(222, 'check car wheels', '', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS)),
    // Task(333, 'shinanint', ' check your teeth', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS))
  ]

  addTask = (task) => {
    return this.tasks.push(task)
  }

  //
  // get tasks () {
  //   return this.tasks
  // }

  set tasks (_tasks) {
    this.tasks = _tasks
  }

}

const taskStore = window.store =new ObservableTasksStore()
export default taskStore
