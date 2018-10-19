import moment from 'moment'

export const momentPropType = function (props, propName, componentName) {
  if (!moment.isMoment(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    )
  }
}