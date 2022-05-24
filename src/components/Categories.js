import React from 'react'
import './Categories.css'
import { FaPizzaSlice,FaHamburger } from 'react-icons/fa';
import {GiNoodles,GiHotSpices} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'
// import {BiHouse} from 'react-icons/bi'


function Categories() {
  return (
    <div className='list'>
        <NavLink to={"/cuisine/Italian"} className="navlink">
            <FaPizzaSlice/>
            <span>Italian</span>
        </NavLink>
        <NavLink to={"/cuisine/American"} className="navlink">
            <FaHamburger/>
            <span>American</span>
        </NavLink>     
           <NavLink to={"/cuisine/Thai"} className="navlink">
            <GiNoodles/>
            <span>Thai</span>
        </NavLink>
        <NavLink to={"/cuisine/Indian"} className="navlink">
            <GiHotSpices/>
            <span>Indian</span>
        </NavLink>
    </div>
  )
}

export default Categories
