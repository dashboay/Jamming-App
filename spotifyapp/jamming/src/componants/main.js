import React,{useState,useEffect} from "react";
import "./css/main.css";
import Search from "./Mcomponants/search";
import Results from "./Mcomponants/results";
import Favorites from "./Mcomponants/favorites";


const Main = function(props){
    let handle1 ;
    const [data,setData] = useState("");
    const [fetchedD , setfetchedD] = useState([]);
    const handlerD = (text)=>{
        setData(text);
    }
    useEffect(function(){
        console.log(data);
        fetch('https://spotify23.p.rapidapi.com/search/?q='+data+'&type=albums&offset=0&limit=10&numberOfTopResults=5',{
            method: "GET",
            headers:{
                'x-rapidapi-key': 'f128cb6c82msh685b5612f73dc83p17c6fdjsn95924fda79d8',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
        }).then(function(response){
            if(response.ok){
                return response.json();
            }
        }).then(function(res){
            setfetchedD(res);
            console.log(res);
        })
    },[data])
    return(
        <main>
            <Search funa={handlerD} />
            <section>
                <Results />
                <Favorites />
            </section>
            {props.children}
        </main>
    )
}

export default Main ;