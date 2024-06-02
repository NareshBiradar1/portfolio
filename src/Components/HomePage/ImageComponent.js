import React from "react";
import Image from "../../assets/HomeImage.svg"

function ImageComponent(){
    return(
        <div>
            <img src={Image} alt="Image not Found" style={styles.image} />
        </div>
    )
}
const styles = {
    image: {
        width: '100%',
        height: 'auto'
    }
};

export default ImageComponent;