import './Navbar.css'
import logo from '../assets/logo.svg';
function navBar(){
    return (
        <>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul class="Navbar">
                    <li class="nav_list_item"><a href="/">Home</a></li>
                    <li class="nav_list_item"><a href="">About</a></li>
                    <li class="nav_list_item"><a href="/skills">Skills</a></li>
                    <li class="nav_list_item"><a href="">Project</a></li>    
                </ul>   
            </header>
            
        </div>
        </>     
    )
}

export default navBar;