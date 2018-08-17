import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import './TaskCard.css'

export class TaskCard extends Component {
  render () {
    const {taskName, description, alertBefore, recurring, lastDone} = this.props
    return (
      <Card className={'card'}>
        <CardContent>
          <div className={'card-wrapper'}>
            <div className={'headline header'}>
              {taskName.charAt(0).toUpperCase() + taskName.substr(1)}
            </div>
            <div className={'body'}>
              <div className={'regular-text'}>
                {description}
              </div>
              <div className={'small-text'}>
                {`Alert ${alertBefore.number} ${alertBefore.period} before Due Date.`}
              </div>
              <div className={'small-text'}>
                {`Alert every: ${recurring.number} ${recurring.period}.`}
              </div>
              <div className={'small-text'}>
                {lastDone && `Last Done: ${lastDone}`}
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button size='small'> Learn More </ Button>
        </CardActions>
      </Card>)
  }
}
