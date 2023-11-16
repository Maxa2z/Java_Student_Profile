import React from "react";

function Img(props){
    return(
        <div>
            <img src={props.src} alt="image"></img>
        </div>
    );
}

export default Img;