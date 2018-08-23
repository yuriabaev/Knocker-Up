import React from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { observer } from 'mobx-react'

const TasksList = ({taskStore}) => {
  const tasks = taskStore.tasks

  return (
    tasks.map((task) => {
      return <TaskCard key={task.id} id={task.id} taskName={task.taskName} description={task.description}
                       alertBefore={task.alertBefore}
                       recurring={task.recurring} lastDone={task.lastDone}/>
    })
  )
}

export default observer(TasksList)