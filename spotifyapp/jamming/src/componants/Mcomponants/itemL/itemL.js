import React from "react";
import "./itemL.css";

const ItemL = function(props){
    const handleC = function(){
        document.getElementById(props.dd).remove();
    }
    return(
        <div id = {props.id} onClick={handleC} className="m" style={{backgroundImage: 'url('+props.background+')'}}>
                <p className="p">{props.title}</p>
        </div> 
    )
}

export default ItemL ; 