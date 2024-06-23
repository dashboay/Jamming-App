import React from "react";
import "./style.css";
import Item from "./item";


const Results = function(props){
    return(
        <div className="rs">
            <Item />
            {props.children}
        </div>
    )
}

export default Results ;