import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './component/application/application';
import Skills from './component/skills/skills';
import Counter from './component/counter/counter';

const skills=['HTML','CSS','JAVA SCRIPT']
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Application/>
      <Skills skills={skills}/>
      <Counter/>
    </div>
  );
}

export default App;
