import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>This is really working!</p>
      <Person name="Lisa" age="25"/>
      <Person name="Rose" age="26"/>
      <Person name="Jennie" age="25">My hobbies: Singing</Person>
      <Person name="Jisoo" age="26"/>
    </div>
  );
}

export default App;
