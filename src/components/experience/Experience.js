import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>WebDev Experience</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>React JS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>WordPress</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>GCP & AWS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>
  

          {/* END OF Frontend */}
        
        <div className='experience__backend'>
        <h3>Design Experience</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Figma</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Adobe Photoshop</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Adobe Illustrator</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Adobe InDesign</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Invision</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Web Design</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Mobile Design</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>User Research</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Prototyping</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Wireframng</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>User Interface</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>User Experience</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
              <h4>Graphic Design</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            

        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience