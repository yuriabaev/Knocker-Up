import { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import { Duration, TIME } from '../../../businessLogic/types'
import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'

export const PeriodPicker = ({isInEditMode, number, time, onChange}) => {
  const onNumberChange = (event) => {
    onChange(Duration(event.target.value, time))
  }
  const onTimeChange = (event) => {
    onChange(Duration(number, event.target.value))
  }
  return (<span>
      {
        isInEditMode ?
          <Fragment>
            <TextField
              value={number}
              onChange={onNumberChange}
              type="number"
              fullWidth={false}
              InputProps={{
                classes: {
                  root: 'number-input',
                },
              }}
            />

            <Select
              displayEmpty
              value={time}
              variant={'standard'}
              classes={{
                root: 'footer-text'
              }}
              onChange={onTimeChange}>
              {Object.keys(TIME).map((time_type_key) => {
                return <MenuItem key={time_type_key} value={TIME[time_type_key]}>{TIME[time_type_key]}</MenuItem>
              })}
            </Select>
          </Fragment>
          :
          <Fragment>
            <span className={'number-input'}>{number}</span> {time}
          </Fragment>
      }</span>
  )

}