import tasksStore from '../stores/tasks'

export const markTaskDone = (id) => {
  tasksStore.markTaskAsDone(id)
}

export const onEditCard = (id) => {
  tasksStore.goToEditMode(id)
}
export const onSaveCard = (id, editedTask) => {
  tasksStore.editTask(id, editedTask)
  tasksStore.goToViewMode()
}