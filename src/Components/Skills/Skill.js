import React from "react";
import ProgressBar from './Progress/ProgressBar';


function Skill({SkillName , SkillPercent}){
    

    return(
        <div id="skill">
            <h3>{SkillName}</h3>
            <ProgressBar progress={SkillPercent}/>
        </div>
    )
    
}

export default Skill;