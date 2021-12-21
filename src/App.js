import logo from './logo.svg';
import './App.css';
import data from './locales/es-ES.json'

const phrase = data;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Phrase</h3>
        <hr/>
        {phrase.Hello} {phrase.World}
      </header>
    </div>
  );
}

export default App;
