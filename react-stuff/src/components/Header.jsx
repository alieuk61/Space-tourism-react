import { useState } from "react";
import App from "../App";
import '../App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Destination from './Destinations/Destination'
import Crew from './Crewmen/Crew'


function Header(){


    return(
        <header>
            <svg className='header-icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            <div className='middle-header'></div>
            <div className='header'>
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to='/'><div className='pointer homep-btn homebtn'><span className='btn-num'>00</span>HOME</div></NavLink>
                <NavLink to='./Destination'><div className='pointer homep-btn destbtn'><span className='btn-num'>01</span>DESTINATION</div></NavLink>
                <NavLink to='./Crew'><div className='pointer homep-btn crewbtn'><span className='btn-num'>02</span>CREW</div></NavLink>
                <NavLink to='.Technology'><div className='pointer homep-btn techbtn'><span className='btn-num'>03</span>TECHNOLOGY</div></NavLink>
            </div>
            {/* {[1, 2, 3, 4].map((num) => ( //looping makes things easier it allows me to create 4 divs and give them the same classes and eventlisteners
                <div
                    key={num}
                    className={`hover-underline und${num}`}
                ></div>
            ))} */}

        </header>
    
    )

}
//i want to hover over the divs with classnames of hover-underline, if it contains each of the different second cN's then we say mouseOver = true and we set display to block

export default Header