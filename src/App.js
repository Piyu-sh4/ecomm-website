import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

      <h1>E-Commerce Website</h1>
      <button>Normal Button</button>
      <Button>BootStrap Button</Button>

    </div>
  );
}

export default App;
