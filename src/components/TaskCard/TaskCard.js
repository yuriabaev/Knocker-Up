import React, { Component } from 'react'
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
    const {taskName, description, alertBefore, recurring, lastDone} = this.props
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
              {`Alert every: ${recurring.number} ${recurring.period}.`}
            </div>
            {lastDone
            &&
            <div className={'footer-text'}>
              Last Done: {lastDone.format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            }
          </div>
        </div>
        <CardActions>
          <Button size='small' onClick={this.onClickDone}> Done </ Button>
        </CardActions>
      </Card>)
  }
}
