import React from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { observer } from 'mobx-react'

const TasksList = ({taskStore,applicationStore}) => {
  const tasks = taskStore.tasks

  return (
    tasks.map((task) => {
      const isEditMode = applicationStore.transientTask && (applicationStore.transientTask.id === task.id)
      if(isEditMode){
        task = applicationStore.transientTask
      }

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
                       isInEditMode={isEditMode}

      />
    })
  )
}

export default observer(TasksList)