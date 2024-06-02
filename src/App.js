import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import SkillsPage from './Components/Skills/SkillPage';
import Home from'./Components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
      </header>
      <Home/>
      <SkillsPage/>
    </div>
  );
}

export default App;
