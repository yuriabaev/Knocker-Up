import React, { Component } from 'react'
import './App.css'
import TasksList from './components/TasksList/TasksList'
import taskStore from './stores/tasks'
import applicationStore from './stores/application'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { TaskCard } from './components/TaskCard/TaskCard'
import { observer } from 'mobx-react'
import * as taskBusinessLogic from './businessLogic/taskLogic'

//import { configure } from 'mobx';

// configure({
//   enforceActions: 'strict'
// });
//TODO put a provider here

@observer
class App extends Component {
  handleClose = () => {
    applicationStore.goToViewMode()

  }

  onAddClick = () => {
    applicationStore.goToCreateMode()
  }
  onAddNewCard = () => {
    taskBusinessLogic.onAddNewCard()
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tasks List</h1>
        </header>
        <div className={'page-wrapper'}>
          <TasksList taskStore={taskStore} applicationStore={applicationStore}/>
          {applicationStore.isInCreateMode() &&
          <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title"
                  open={applicationStore.isInCreateMode()}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>

            <TaskCard key={applicationStore.transientTask.id}
                      id={applicationStore.transientTask.id}
                      taskName={applicationStore.transientTask.taskName}
                      description={applicationStore.transientTask.description}
                      notifyDuration={applicationStore.transientTask.notifyDuration}
                      recurringDuration={applicationStore.transientTask.recurring}
                      lastDone={applicationStore.transientTask.lastDone}
                      daysLeft={applicationStore.transientTask.daysLeft}
                      dueDate={applicationStore.transientTask.dueDate}
                      isActive={applicationStore.transientTask.isActive}
                      isInEditMode={true}
                      onSaveCard={this.onAddNewCard}
            />
          </Dialog>
          }
          <Button onClick={this.onAddClick} variant="fab" color="primary" aria-label="Add" className={'add-btn'}>
            <Icon>add_icon</Icon>
          </Button>
        </div>

      </div>
    )
  }
}

export default App
