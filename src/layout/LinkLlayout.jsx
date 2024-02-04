import React from 'react'
import {Link, Outlet} from "react-router-dom"
import './linklayout.css'


const linkLayout = () => {
  return (
    <div className='linkLayout'>
      
      <div className='navbar'>
    <Link to={'/'}>HOME</Link>
    <Link to={'/about'}>ABOUT</Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default linkLayout
