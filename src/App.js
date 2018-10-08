import React, { Component } from 'react'
import './App.css'
import TasksList from './components/TasksList/TasksList'
import taskStore from './stores/tasks'
import applicationStore from './stores/application'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { TaskCard } from './components/TaskCard/TaskCard'
//import { configure } from 'mobx';

// configure({
//   enforceActions: 'strict'
// });
//TODO put a provider here

class App extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tasks List</h1>
        </header>
        <div className={'page-wrapper'}>
          <TasksList taskStore={taskStore} applicationStore={applicationStore}/>
          <Button variant="fab" color="primary" aria-label="Add" className={'add-btn'}>
            <Icon >add_icon</Icon>
          </Button>
        </div>

        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title"           open={true}
        >
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <TaskCard key={'taskStore.tasks[0].id'}
                    id={taskStore.tasks[0].id}
                    taskName={taskStore.tasks[0].taskName}
                    description={taskStore.tasks[0].description}
                    notifyDuration={taskStore.tasks[0].notifyDuration}
                    recurringDuration={taskStore.tasks[0].recurring}
                    lastDone={taskStore.tasks[0].lastDone}
                    daysLeft={taskStore.tasks[0].daysLeft}
                    dueDate={taskStore.tasks[0].dueDate}
                    isActive={taskStore.tasks[0].isActive}
                    isInEditMode={true}
/>
        </Dialog>

      </div>
    )
  }
}

export default App
