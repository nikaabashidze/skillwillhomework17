import React from 'react'
import {Link, Outlet} from "react-router-dom"
import './linklayout.css'


const linkLayout = () => {
  return (
    <div className='linkLayout'>
      
      <div className='navbar'>
    <Link to={'/skillwillhomework17/'}>HOME</Link>
    <Link to={'/skillwillhomework17/about'}>ABOUT</Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default linkLayout
