import React,{useState,useEffect} from "react";
import "./css/main.css";
import Search from "./Mcomponants/search/search";
import Results from "./Mcomponants/result/results";
import Favorites from "./Mcomponants/favorite/favorites";
import Item from "./Mcomponants/item/item";
import fetching from "./Mcomponants/utilities/fetching";
import token from "./Mcomponants/utilities/newtoken";
import ItemL from "./itemL/itemL";


const Main = function(props){
    //use stats
    const [data,setData] = useState("hello");
    const [fetchedD , setfetchedD] = useState([]);
    const [favorite , setFavorite] = useState([]);
    const handlerD = (text)=>{
        setData(text);
    }
    const fun = async function(){
        let task1 = await token();
        let task2 = await fetching(task1,data);
        setfetchedD(task2.albums.items);
    }
    //use effect
    useEffect(function(){
    //calling async function
    fun();
    console.log(fetchedD);
    },[data])

    const handler = function(data1 , data2){
        setFavorite(pfav => [...pfav , {title : data1 , background : data2}]);
    }

    console.log(fetchedD);
    return(
        <main>
            <Search funa={handlerD} />
            <section>
                <Results>
                    {fetchedD.map(function(ob,index){
                        return <Item dataP={handler} event={handler} key={index} title={ob.name} background={ob.images[0].url} />
                    })}
                </Results>
                <Favorites>
                    {
                        favorite.map(function(item , key){
                            return <ItemL audio = {fetchedD.href} id = {key} dd = {key} title = {item.title} background = {item.background}  key = {key}/>
                        })
                    }
                </Favorites>
            </section>
            {props.children}
        </main>
    )
}

export default Main ;