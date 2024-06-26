import React from "react";
import './SkillPage.css';
import Skill from "./Skill";

function SkillsPage(){
    return(
        <div id="SkillsPage">
            <div id="AllSkills">
                <h1>SKILLS</h1>
                <Skill SkillName="Java" SkillPercent={60} />
                <Skill SkillName="Data Structures And Alogoriths" SkillPercent={70} />
                <Skill SkillName="HTML" SkillPercent={80} />
                <Skill SkillName="Javascript" SkillPercent={85} />
                <Skill SkillName="Web Development" SkillPercent={40} />
            </div>
        </div>
    )
}

export default SkillsPage;