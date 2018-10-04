import React, { Component } from 'react'
import './App.css'
import TasksList from './components/TasksList/TasksList'
import taskStore from './stores/tasks'
import applicationStore from './stores/application'
//import { configure } from 'mobx';

// configure({
//   enforceActions: 'strict'
// });
//TODO put a provider here
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tasks List</h1>
        </header>
        <div className={'page-wrapper'}>
          <TasksList taskStore={taskStore} applicationStore={applicationStore}/>
        </div>
      </div>
    )
  }
}

export default App
