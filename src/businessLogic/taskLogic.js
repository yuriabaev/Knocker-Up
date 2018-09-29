import tasksStore from '../stores/tasks'
import { Duration, Task, TIME } from './types'

export const markTaskDone = (id) => {
  tasksStore.markTaskAsDone(id);
//tasksStore.addTask(    new Task(44, 'shinanint', ' check your teeth', Duration(2, TIME.DAYS), Duration(1, TIME.MONTHS)))
}