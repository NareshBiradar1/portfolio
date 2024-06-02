import './App.css';
import NavBar from './Components/NavBar';
import SkillsPage from './Components/Skills/SkillPage';
import Home from'./Components/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './Components/AboutPage/About';
import ProjectsPage from './Components/ProjectsPage/ProjectPage'
import Footer from './Components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar/><Home/><Footer/></>
  },
  {
    path: "/skills",
    element: <><NavBar/><SkillsPage /><Footer/></>
  },
  {
    path : "/about",
    element : <><NavBar/><AboutPage/><Footer/></>
  },
  {
    path : "/projects",
    element : <><NavBar/><ProjectsPage/><Footer/></>
  }
])

function App() {
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  );
}

export default App;
