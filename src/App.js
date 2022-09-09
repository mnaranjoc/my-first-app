import { React, Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  logMessage = () => {
    console.log('Button clicked!')
  }

  render() {

    const style = {
      backgroundColor: 'white',
      fond: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <h1>Hi I'm a react app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.logMessage}>Log message</button>
        <Person name='Lisa' age='25' />
        <Person name='Rose' age='26' />
        <Person name='Jennie' age='25'>
          My hobbies: Singing
        </Person>
        <Person name='Jisoo' age='26' />
      </div>
    )
  }
}

export default App
