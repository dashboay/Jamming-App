import React from "react";

const Favorites = function(props){
    return(
        <div className="rs fav">
            <h2>Favorite list</h2>
            {props.children}
        </div>
    )
}

export default Favorites ;