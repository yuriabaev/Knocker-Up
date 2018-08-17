import React from 'react'
import { getTasks } from '../../data/tasks'
import { TaskCard } from '../TaskCard/TaskCard'

export const TasksList = () => {
  const tasks = getTasks()

  return (
    tasks.map((task) => {
      return <TaskCard key={task.id} id={task.id} taskName={task.taskName} description={task.description} alertBefore={task.alertBefore}
                       recurring={task.recurring} lastDone={task.lastDone}/>
    })
  )
}