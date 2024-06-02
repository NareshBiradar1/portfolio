import './App.css';
import NavBar from './Components/NavBar';
import SkillsPage from './Components/Skills/SkillPage';
import Home from'./Components/HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar/><Home/></>
  },
  {
    path: "/skills",
    element: <><NavBar/><SkillsPage /></>
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
