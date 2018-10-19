import React from 'react'
import moment from 'moment'
import { Duration } from '../../businessLogic/Types/Duration'
import { momentPropType } from '../../businessLogic/Types/customExternalPropTypes'
import { calculateStatus } from '../../businessLogic/Utils'



const TaskStatus = ({dueDate, notifyDuration}) => {
  const status = calculateStatus({dueDate, notifyDuration})



  return (
    <div>

    </div>
  )
}

TaskStatus.propTypes = {
  dueDate: momentPropType,
  notifyDuration: Duration.PropType.isRequired
}

export default TaskStatus