import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './TaskCard.css'
import { markTaskDone } from '../../businessLogic/taskLogic'
import { observer } from 'mobx-react'

const TIME_FORMAT = 'DD/MM/YY h:mm:ss'

@observer
export class TaskCard extends Component {
  onClickDone = () => {
    markTaskDone(this.props.id)
  }

  render () {
    const {taskName, description, notifyDuration, recurring, lastDone, dueDate} = this.props
    console.log('lastDone', lastDone && lastDone.format(TIME_FORMAT), 'dueDate', dueDate && dueDate.format(TIME_FORMAT))
    return (
      <Card className={'card'}>
        <div className={'card-wrapper'}>
          <div className={'headline header'}>
            <span>
              {taskName.charAt(0).toUpperCase() + taskName.substr(1)}
            </span>
            <span className='btn'>
              <i className='far fa-edit'/>
            </span>
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
          <Button size='small' onClick={this.onClickDone}> Done </ Button>
        </CardActions>
      </Card>)
  }
}
