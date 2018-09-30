import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './TaskCard.css'
import { markTaskDone, onEditCard, onSaveCard } from '../../businessLogic/taskLogic'
import { observer } from 'mobx-react'
import { Task } from '../../businessLogic/types'
import { capitalize } from '../../utils/StringUtils'

const TIME_FORMAT = 'DD/MM/YY h:mm:ss'

@observer
export class TaskCard extends Component {
  constructor (props) {
    super(props)
    const {id, taskName, description, notifyDuration, recurring, lastDone, isActive} = this.props
    this.state = {transientTask: new Task(id, taskName, description, notifyDuration, recurring, lastDone, isActive)}
  }

  onClickDone = () => {
    markTaskDone(this.props.id)
  }

  onClickEdit = () => {
    onEditCard(this.props.id)
  }

  onClickSave = () => {
    onSaveCard(this.props.id, this.state.transientTask)
  }

  onChangeTitle = (event) => {
    this.setState({
      transientTask: {
        ...this.state.transientTask,
        taskName: String(event.target.value).toLowerCase()
      }
    })
  }

  render () {
    const {taskName, description, notifyDuration, recurring, lastDone, dueDate, isInEditMode} = this.props
    console.log('this.state.transientTask', this.state.transientTask)

    return (
      <Card className={'card'}>
        <div className={'card-wrapper'}>
          <div className={'headline header'}>
            {
              isInEditMode ?
                <input className={'headline'} value={capitalize(this.state.transientTask.taskName)}
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
              <i className='fas fa-undo'/> {recurring.number} {recurring.time}
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
