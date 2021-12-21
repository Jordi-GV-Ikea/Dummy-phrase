import logo from './logo.svg';
import './App.css';
import data from '../locales/numbers.json'

const numbers = data;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Phrase</h1>
        {numbers.one}/{numbers.two}
      </header>
    </div>
  );
}

export default App;
