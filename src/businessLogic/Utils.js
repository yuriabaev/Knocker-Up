import moment from 'moment'

export const STATUS = {
  BEFORE: 'BEFORE',
  IN_BETWEEN: 'IN_BETWEEN',
  AFTER: 'AFTER'
}
export const calculateStatus = ({now = Date.now(), dueDate, notifyDuration}) => {
  const notifyDate = moment(dueDate).subtract(notifyDuration.number, notifyDuration.time)

  const isNowBeforeAlarmDate = moment(now).isBefore(notifyDate)
  if (isNowBeforeAlarmDate) {
    return STATUS.BEFORE
  }

  const isNowAfterDueDate = moment(now).isAfter(dueDate)
  console.log('isNowAfterDueDate',isNowAfterDueDate)
  if (isNowAfterDueDate) {
    return STATUS.AFTER
  }

  return STATUS.IN_BETWEEN

}