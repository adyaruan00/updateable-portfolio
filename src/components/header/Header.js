import React from 'react'
import './header.css'
import Typewriter from 'typewriter-effect'
import CTA from '../header/CTA.js'
import ME from '../../assets/adyaruan.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
return (
    <header>
      <div className="container header__container" > 
      <h5>Hello I'm</h5>
      <h1> Ady Aruan </h1>
      <Typewriter className="type-writer"
        options={{
          autoStart: true,
          loop : true,
          delay : 50,
          strings: [
            "IT Enthusiast",
            "Web Developer",
            "Design Enthusiast",
            "Photo & Video Enthusiast"
          ],
        }}
      />
      <CTA />
      <HeaderSocials/>
        <div className='me'> 
        <img src={ME} alt='my-photo' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )

}

export default Header