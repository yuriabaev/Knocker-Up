import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './TaskCard.css'
import {
  markTaskDone,
  onEditCardClick,
  onEditCardTaskName,
  onSelectedRecurringTimeChange, onAlertChange,
  onTaskDescriptionChange,
  onClickDelete
} from '../../businessLogic/taskLogic'
import { observer } from 'mobx-react'
import { capitalize } from '../../utils/StringUtils'
import { PeriodPicker } from './components/PeriodPicker'
import TextareaAutosize from 'react-autosize-textarea'
import TaskStatus from '../TaskStatusComponent/TaskStatus'

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
    this.props.onSaveCard(this.props.id)
  }

  onChangeTitle = (event) => {
    onEditCardTaskName(String(event.target.value).toLowerCase())
  }

  onDescriptionChange = (event) => {
    onTaskDescriptionChange(event.target.value)
  }
  onRecurringChange = (duration) => {
    onSelectedRecurringTimeChange(duration)
  }

  onAlertChange = (duration) => {
    onAlertChange(duration)
  }
  onClickDelete = () => {
    onClickDelete(this.props.id)
  }

  render () {
    const {taskName, description, notifyDuration, recurringDuration, lastDone, dueDate, isInEditMode} = this.props

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
                  <div className='action-btns'>


                    <span className='btn' onClick={this.onClickEdit}>
                      <i className='far fa-edit'/>
                    </span>
                    <span className='btn' onClick={this.onClickDelete}>
                      <i className='fas fa-trash'/>
                    </span>
                  </div>
                </Fragment>
            }
          </div>
          <div className={'body'}>
            <TextareaAutosize className={'description-text-area regular-text'} placeholder='Description' wrap='hard'
                              onChange={this.onDescriptionChange} disabled={!isInEditMode} value={description}/>
          </div>
          <div className={'footer'}>
            {lastDone &&
            <div className={'footer-text'}>
              <i className='fa fa-fast-backward'/> {lastDone.format(TIME_FORMAT)}
            </div>
            }
            {recurringDuration &&
            <div className={'footer-text'}>
              <i className='fas fa-undo'/>
              <PeriodPicker isInEditMode={isInEditMode}
                            number={recurringDuration.number}
                            time={recurringDuration.time}
                            onChange={this.onRecurringChange}/>
            </div>
            }

            {dueDate &&
            <div className={'footer-text'}>
              <i className='far fa-clock'/> {dueDate.format(TIME_FORMAT)}
            </div>
            }

            {notifyDuration &&
            <div className={'footer-text'}>
              <i className='fa fa-bell'/>

              <PeriodPicker isInEditMode={isInEditMode}
                            number={notifyDuration.number}
                            time={notifyDuration.time}
                            onChange={this.onAlertChange}/>

              <span>
                before Due Date.
              </span>
            </div>
            }


          </div>
        </div>
        <CardActions>
          {
            isInEditMode ?
              <Button size='small' onClick={this.onClickSave}> Save </ Button> :
              <Button size='small' onClick={this.onClickDone}> Done </ Button>

          }
          <TaskStatus dueDate={dueDate} notifyDuration={notifyDuration}/>
        </CardActions>
      </Card>)
  }
}
