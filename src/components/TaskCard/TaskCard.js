import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './TaskCard.css'
import {
  markTaskDone,
  onEditCardClick,
  onSaveCard,
  onEditCardTaskName,
  onSelectedRecurringTimeChange, onRecurringNumberChange
} from '../../businessLogic/taskLogic'
import { observer } from 'mobx-react'
import { TIME } from '../../businessLogic/types'
import { capitalize } from '../../utils/StringUtils'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const TIME_FORMAT = 'DD/MM/YY h:mm:ss a'

@observer
export class TaskCard extends Component {

  onClickDone = () => {
    markTaskDone(this.props.id)
  }

  onClickEdit = () => {
    onEditCardClick(this.props.id)
  }

  onClickSave = () => {
    onSaveCard(this.props.id)
  }

  onChangeTitle = (event) => {
    onEditCardTaskName(String(event.target.value).toLowerCase())
  }
  onSelectedRecurringTimeChange = (event) => {
    onSelectedRecurringTimeChange(event.target.value)
  }
  onRecurringNumberChange = (event) => {
    console.log('onRecurringNumberChange', event.target.value)
     onRecurringNumberChange(event.target.value)
  }

  render () {
    const {taskName, description, notifyDuration, recurring, lastDone, dueDate, isInEditMode} = this.props

    return (
      <Card className={'card'}>
        <div className={'card-wrapper'}>
          <div className={'headline header'}>
            {
              isInEditMode ?
                <input className={'headline'} value={capitalize(taskName)} placeholder={'Title'}
                       onChange={this.onChangeTitle}/>
                :
                <Fragment>
                  <span>
                    {capitalize(taskName)}
                  </span>
                  <span className='btn' onClick={this.onClickEdit}>
                    <i className='far fa-edit'/>
                  </span>
                </Fragment>
            }
          </div>
          <div className={'body'}>
            <div className={'regular-text'}>
              {description}
            </div>
          </div>
          <div className={'footer'}>
            {lastDone &&
            <div className={'footer-text'}>
              <i className='fa fa-fast-backward'/> {lastDone.format(TIME_FORMAT)}
            </div>
            }
            <div className={'footer-text'}>
              <i className='fas fa-undo'/>
              {isInEditMode ?
                <Fragment>
                  <TextField
                    value={recurring.number}
                    onChange={this.onRecurringNumberChange}
                    type="number"
                    className={'footer-text'}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    //margin="normal"
                  />
                  <Select
                    displayEmpty
                    value={recurring.time}
                    variant={'standard'}
                    classes={{
                      root: 'footer-text'
                    }}
                    onChange={this.onSelectedRecurringTimeChange}>
                    {Object.keys(TIME).map((time_type_key) => {
                      return <MenuItem key={time_type_key} value={TIME[time_type_key]}>{TIME[time_type_key]}</MenuItem>
                    })}
                  </Select>
                </Fragment>
                :

                <Fragment>
                  <span className={'recurring-number'}>{recurring.number}</span> {recurring.time}
                </Fragment>
              }

            </div>
            {dueDate &&
            <div className={'footer-text'}>
              <i className='far fa-clock'/> {dueDate.format(TIME_FORMAT)}
            </div>
            }


            <div className={'footer-text'}>
              <i className='fa fa-bell'/> {notifyDuration.number} {notifyDuration.time} before Due Date.
            </div>


          </div>
        </div>
        <CardActions>
          {
            isInEditMode ?
              <Button size='small' onClick={this.onClickSave}> Save </ Button> :
              <Button size='small' onClick={this.onClickDone}> Done </ Button>

          }
        </CardActions>
      </Card>)
  }
}
