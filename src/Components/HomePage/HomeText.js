// import React from "react";
// import './HomeText.css';
// import Typing from './Typing'
// function HomeText(){
//     return(
//         <>
//         <div id="HomeText">
//             <h1>Hi , I am Naresh Biradar</h1>
//             <Typing
//                 text = {[
//                     "A passionate software engineer",
//                     "A fast-learner software engineer",
//                     "A Committed software engineer"
//                 ]}
//                 typingSpeed = {100}
//                 deletingSpeed={50}
//             />
//             <a id="resumeTag" href="https://docs.google.com/document/d/1bw6PT2N0UqqGgHsi6Z8hKsvkOx5-JK0I0j3GiAmAfJo/edit" target="_blank">
//                 Resume
//             </a>
//         </div>
//         </>
//     )
// }

// export default HomeText;
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing the icons
import Typing from './Typing'
import './HomeText.css';

function HomeText() {
    return (
        <div id="HomeText">
            <h1>Hi, I am Naresh Biradar</h1>
            <Typing
                text={[
                    "A passionate software engineer",
                    "A fast-learner software engineer",
                    "A committed software engineer"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
            />
            <a id="resumeTag" href="https://docs.google.com/document/d/1bw6PT2N0UqqGgHsi6Z8hKsvkOx5-JK0I0j3GiAmAfJo/edit" target="_blank" rel="noopener noreferrer">
                Resume
            </a>
            <div className="social-icons">
                <a href="https://github.com/NareshBiradar1" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
                <a href="https://www.linkedin.com/in/nareshbiradar/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
                <a href="https://x.com/nareshdb555" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
            </div>
        </div>
    )
}

export default HomeText;
