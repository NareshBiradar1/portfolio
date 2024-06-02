import React from "react";
import './Home.css'
import './HomeText'
import HomeText from "./HomeText";
import ImageComponent from "./ImageComponent";

function Home(){
    return(
        <div id="HomePage">
            <HomeText/>
            <ImageComponent/>
        </div>

    )
}
export default Home;