import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Typing from './Typing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
        <Typing
          text = {[
            "aaaaaaaaaa",
            "bbbbbbbbbb",
            "cccccccccc"
          ]}
          typingSpeed = {100}
          deletingSpeed={50}
        />
      </header>
    </div>
  );
}

export default App;
