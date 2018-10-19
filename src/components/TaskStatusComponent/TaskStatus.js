import React from 'react'
import { Duration } from '../../businessLogic/Types/Duration'
import { momentPropType } from '../../businessLogic/Types/customExternalPropTypes'
import { calculateStatus, STATUS } from '../../businessLogic/Utils'
import './TaskStatus.css'



const TaskStatus = ({dueDate, notifyDuration}) => {
  const status = calculateStatus({dueDate, notifyDuration})

  if (status === STATUS.BEFORE) {
    return (
      <div className='status ok'>
        OK
      </div>
    )
  } else if (status === STATUS.IN_BETWEEN) {
    return (
      <div className='status warning'>
        Warning
      </div>
    )
  } else if (status === STATUS.AFTER) {
    return (
      <div className='status do'>
        DO!
      </div>
    )
  }


}

TaskStatus.propTypes = {
  dueDate: momentPropType,
  notifyDuration: Duration.PropType.isRequired
}

export default TaskStatus