import React , {useState , useEffect} from "react";
import "./search.css";

const Search = function(props){
    const [text, setText] = useState("");
    const handleI = function(event){
        setText(event.target.value) ;
    }
    const handleC = function(){
         props.funa(text);
    }
    return(
        <>
          <div className="search">
            <input className="inputS" placeholder="search for something here" id="inputS" onChange={handleI}/>
            <button className="buttonS" onClick={handleC}>search</button>
          </div>
        </>
    )
}

export default Search ;