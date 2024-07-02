import React,{useState,useEffect} from 'react';
import "./css/header.css";

var number = 0 ;
const list = [<div className='inl'><p class="sb">🎼</p><p>amming</p></div>,
    <div className='inl'><p>j</p><p class="sb">🎼</p><p>mming</p></div>,
    <div className='inl'><p>ja</p><p class="sb">🎼</p><p>ming</p></div>,
    <div className='inl'><p>jam</p><p class="sb">🎼</p><p>ing</p></div>,
    <div className='inl'><p>jamm</p><p class="sb">🎼</p><p>ng</p></div>,
    <div className='inl'><p>jammi</p><p class="sb">🎼</p><p>g</p></div>,
    <div className='inl'><p>jammin</p><p class="sb">🎼</p></div>];

const Header = function(){
    const [title,setTitle] = useState("Jamming");
    useEffect(function(){
       let interval = setInterval(() => {
            if(number===7){
                number = number-7 ;
            }
            setTitle(list[number]);
                number = number + 1 ;
        }, 2000);
    
        return ()=> {clearInterval(interval) }}
    ,[])
    return(
        <header>
            <h1 className='title'>
                {title}
            </h1>
        </header>
    )
}

export default Header ;