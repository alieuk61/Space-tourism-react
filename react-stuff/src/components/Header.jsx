import { useState } from "react";
import '../App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Destination from './Destination'


function Header(){
    const [isMouseOver, setMouseOver] = useState(false);
    const [isMouseOut, setMouseOut] = useState(true);

    function handleMouseOver(e){
        setMouseOver(true)
    }

    function handleMouseOut(){
        setMouseOut(false)
    }

    return(
        <header>
            <svg className='header-icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            <div className='middle-header'></div>
            <div className='header'>
                <div className='pointer homep-btn'><span className='btn-num'>00</span>Home</div>
                <div className='pointer homep-btn'><span className='btn-num'>01</span><Link to='./Destination.jsx'>Destination</Link></div>
                <div className='pointer homep-btn'><span className='btn-num'>02</span>Crew</div>
                <div className='pointer homep-btn'><span className='btn-num'>03</span>Technology</div>
            </div>
            <div 
            className='hover-underline und1' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            style={{ display: isMouseOver? 'block' : 'hidden' }}
            ></div>
            <div 
            className='hover-underline und2' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            style={{ display: isMouseOver ? 'block' : 'hidden' }}
            ></div>
            <div 
            className='hover-underline und3' 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ display: isMouseOver ? 'block' : 'hidden' }}
            ></div>
            <div 
            className='hover-underline und4' 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ display: isMouseOver ? 'block' : 'hidden' }}
            ></div>

        </header>
    
    )

}
//i want to hover over the divs with classnames of hover-underline, if it contains each of the different second cN's then we say mouseOver = true and we set display to block

export default Header