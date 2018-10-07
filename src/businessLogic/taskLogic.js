import tasksStore from '../stores/tasks'
import applicationStore from '../stores/application'

export const markTaskDone = (id) => {
  tasksStore.markTaskAsDone(id)
}

export const onEditCardClick = (id) => {
  applicationStore.goToEditMode(id)
}
export const onSaveCard = () => {
  const editedTask  = applicationStore.transientTask;
  tasksStore.saveEditedTask(editedTask)
  applicationStore.goToViewMode()
}

export const onEditCardTaskName = (taskName) => {
  applicationStore.onEditCardTaskName(taskName)
}

export const onSelectedRecurringTimeChange = (duration) => {
  applicationStore.onRecurringTimeChange(duration)
}

export const onAlertChange = (duration) => {
  applicationStore.onAlertTimeChange(duration)
}
