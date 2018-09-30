import React from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { observer } from 'mobx-react'

const TasksList = ({taskStore}) => {
  const tasks = taskStore.tasks

  return (
    tasks.map((task) => {

      return <TaskCard key={task.id}
                       id={task.id}
                       taskName={task.taskName}
                       description={task.description}
                       notifyDuration={task.notifyDuration}
                       recurring={task.recurring}
                       lastDone={task.lastDone}
                       daysLeft={task.daysLeft}
                       dueDate={task.dueDate}
                       isActive={task.isActive}
                       isInEditMode={taskStore.idOfInViewMode === task.id}
      />
    })
  )
}

export default observer(TasksList)