import logo from "./assets/logo.svg";
import "./App.css";
import Replay from "./components/replay";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> <p>React Project</p>
        <a
          className="App-link"
          href="https://github.com/00hani"
          target="_blank"
          s
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
        <Replay />
      </header>
    </div>
  );
}

export default App;
