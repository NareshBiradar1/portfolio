import React from "react";
import './HomeText.css';
import Typing from './Typing'
function HomeText(){
    return(
        <>
        <div id="HomeText">
            <h1>Hi , I am Naresh Biradar</h1>
            <Typing
                text = {[
                    "A passionate software engineer",
                    "A fast-learner software engineer",
                    "A Committed software engineer"
                ]}
                typingSpeed = {100}
                deletingSpeed={50}
            />
            <a id="resumeTag" href="https://docs.google.com/document/d/1bw6PT2N0UqqGgHsi6Z8hKsvkOx5-JK0I0j3GiAmAfJo/edit" target="_blank">
                Resume
            </a>
        </div>
        </>
    )
}

export default HomeText;