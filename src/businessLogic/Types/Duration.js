import PropTypes from 'prop-types'

export const Duration = (number, time) => {
  return {
    number, time
  }
}


Duration.PropType = PropTypes.shape({
  number: PropTypes.number,
  time: PropTypes.string,
})

