import React from 'react'
import './homepage.css'
import Sherlock from '../../assets/sherlock-holmes-trends-twitter.webp'

const Homeppage = () => {
  return (
    <div className='Homeppage'>
      <h1>Sherlock Holmes </h1>
      <img src={Sherlock} alt="" />
    </div>
  )
}

export default Homeppage
