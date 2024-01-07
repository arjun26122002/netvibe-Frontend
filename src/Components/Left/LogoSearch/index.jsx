import React from 'react'
import logo from "../../../img/logo2.png"
import {UilSearch} from '@iconscout/react-unicons';
import "./index.css"

const Logosearch = () => {
  return (
    <div className="LogoSearch">
        <img src={logo} alt='logo' style={{
            height:"40px"
        }}/>
        
        <div className="Search">
            <input type='text' placeholder='#Explore'/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default Logosearch