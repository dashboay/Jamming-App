import React  from "react";
import "./../style.css";


const Item = function(props){
    const datas = function(e){ 
        e.stopPropagation(); 
       props.dataP(props.title , props.background);
    }
    return(
        <div id={props.id} onClick={props.event} className="item" style={{backgroundImage: 'url('+props.background+')'}}>
                <p className="p">{props.title}</p>
                <button className="add" onClick={datas}>addtofavorite</button>
        </div>
    )
}

export default Item ;