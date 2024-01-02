import React from 'react'
import logo from "../../../img/logo1.png"
import {UilSearch} from '@iconscout/react-unicons';
import "./Logosearch.css"

const Logosearch = () => {
  return (
    <div className="LogoSearch">
        <img src={logo} alt='logo' style={{
            height:"60px"
        }}/>
        <div className="Search">
            <input type='text' placeholder='#Exploer'/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default Logosearch