import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './TaskCard.css'
import { markTaskDone } from '../../businessLogic/taskLogic'

export class TaskCard extends Component {
  onClickDone = () => {
    markTaskDone(this.props.id)
  }

  render () {
    const {taskName, description, alertBefore, recurring, lastDone, daysLeft} = this.props
    console.log('lastDone', lastDone)
    return (
      <Card className={'card'}>
        <div className={'card-wrapper'}>
          <div className={'headline header'}>
            {taskName.charAt(0).toUpperCase() + taskName.substr(1)}
          </div>
          <div className={'body'}>
            <div className={'regular-text'}>
              {description}
            </div>
          </div>
          <div className={'footer'}>
            <div className={'footer-text'}>
              {`Alert ${alertBefore.number} ${alertBefore.period} before Due Date.`}
            </div>
            <div className={'footer-text'}>
              {`Do every: ${recurring.number} ${recurring.period}.`}
            </div>
            {lastDone
            &&
            <div className={'footer-text'}>
              Last Done: {lastDone.format('DD/MM/YY, h:mm:ss')}
            </div>
            }
            <div className={'footer-text'}>
              {`Days left till due date: ${daysLeft}.`}
            </div>
          </div>
        </div>
        <CardActions>
          <Button size='small' onClick={this.onClickDone}> Done </ Button>
        </CardActions>
      </Card>)
  }
}
