import React from "react";
import "./../style.css";


const Results = function(props){
    return(
        <div className="rs">
            <h2>results</h2>
            {props.children}
        </div>
    )
}

export default Results ;