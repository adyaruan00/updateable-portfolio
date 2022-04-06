import React from 'react'
import './about.css'
import ME_ABOUT from '../../assets/me_me-about.png'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {RiProjector2Line} from 'react-icons/ri'

const about = () => {

  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME_ABOUT} alt="About Image"></img>

        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <BiAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Few Internships</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Clients</small>
          </article>

          <article className='about__card'>
            <RiProjector2Line className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
          <p>
          Hi, My name is Ady Aruan, I am a graduate of Del Institute of Technology, Majoring in Diploma 3 Computer Engineering. I have an interest in website development, graphic design, and UI/UX Design. And also has hobbies in the field of photography and videography. I like to learn new technologies related to these things.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}


export default about