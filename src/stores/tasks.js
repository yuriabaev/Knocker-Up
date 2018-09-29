import { Duration, Task, TIME } from '../businessLogic/types'
import { observable, action } from 'mobx'

class ObservableTasksStore {

//TODO use the  provider to pass store <Provider searchStore={searchStore}>

  @observable
  tasks = [
    new Task(111, 'clean the car', 'with soap plz, it is really important', Duration(7, TIME.DAYS), Duration(6, TIME.MONTHS), '2018-08-17T10:02:18.674Z'),
    new Task(222, 'check car wheels', '', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS)),
    new Task(333, 'shinanint', ' check your teeth', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS))
  ]

  @action
  markTaskAsDone = (id) => {
    console.log('id',id)
    const index = this.tasks.findIndex((_tsk) => _tsk.id === id)
    console.log('index',index)
    this.tasks[index].markAsDone()
    console.log('this.tasks[index]',this.tasks[index])
  }

  @action
  addTask = (task) => {
    return this.tasks.push(task)
  }

  //
  // get tasks () {
  //   return this.tasks
  // }

  // set tasks (_tasks) {
  //   this.tasks = _tasks
  // }

}

const taskStore = window.store = new ObservableTasksStore()
export default taskStore
