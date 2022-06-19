import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import InfoModal from './components/Modal/Modal'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ive finally got my react app working on an EC2 instance using NGINX =D
          
        </p>
       <p>
       <InfoModal></InfoModal>
       </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
