import React from 'react'
import './Footer.css'
import logos from '../Images/logos.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div>
      <img src={logos} alt="" width="20" height="24" class="d-inline-block align-text-top"/>
            <em>Copyright,2021 Yenbyen</em>
      </div>
            
    </div>
  )
}

export default Footer