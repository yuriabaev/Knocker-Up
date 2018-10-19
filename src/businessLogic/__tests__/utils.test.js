import { calculateStatus, STATUS } from '../Utils'
import { Duration } from '../Types/Duration';
import { TIME } from '../types';
import moment from 'moment';

describe('calculate status', () => {
  describe('when now is before notify date', () => {
    it('returns STATUS.BEFORE', () => {
      //Arrange
      const dueDate = moment()
      const notifyDuration = Duration(1, TIME.DAYS)
      const notifyDate = moment(dueDate).subtract(notifyDuration.number,notifyDuration.time).valueOf()

      const now = moment(notifyDate).subtract(1, TIME.DAYS).valueOf()
      //Act
      const status = calculateStatus({now, dueDate, notifyDuration})
      //Assert
      expect(status).toBe(STATUS.BEFORE)
    })
  })
  describe('when now is between notify date and before due date', () => {
    it('returns STATUS.IN_BETWEEN', () => {
      //Arrange
      const dueDate = moment()
      const notifyDuration = Duration(1, TIME.DAYS)
      const notifyDate = moment(dueDate).subtract(notifyDuration.number,notifyDuration.time)
      const now = moment(notifyDate).add(1, TIME.HOURS).valueOf()

      //Act
      const status = calculateStatus({now, dueDate, notifyDuration})
      //Assert
      expect(status).toBe(STATUS.IN_BETWEEN)
    })
  })
  describe('when now is after due date', () => {
    it('returns STATUS.AFTER', () => {
      //Arrange
      const dueDate = moment()
      const notifyDuration = Duration(1, TIME.DAYS)
      const notifyDate = moment(dueDate).subtract(notifyDuration.number,notifyDuration.time).valueOf()
      const now = moment(notifyDate).add(2, TIME.DAYS).valueOf()
      //Act
      const status = calculateStatus({now, dueDate, notifyDuration})
      //Assert
      expect(status).toBe(STATUS.AFTER)
    })
  })
})