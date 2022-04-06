import React from 'react'
import './portfolio.css'
import PORTFOLIO1 from '../../assets/happyfresh.png'
import PORTFOLIO2 from '../../assets/join.png'
import PORTFOLIO3 from '../../assets/store.png'
import PORTFOLIO4 from '../../assets/samuraikura.png'
import PORTFOLIO5 from '../../assets/music player.png'
import PORTFOLIO6 from '../../assets/her.png'

const data = [
  {
    id: 1,
    image : PORTFOLIO1,
    title: 'HappyFresh Career Site',
    demo : 'https://careers.happyfresh.com'
  },
  {
    id: 2,
    image : PORTFOLIO2,
    title: 'Join Gmillennial',
    demo : 'https://join.gmillennial.com/'
  },
  {
    id: 3,
    image : PORTFOLIO3,
    title: 'Store Gmillennial',
    demo : 'https://store.gmillennial.com/'
  },
  {
    id: 4,
    image : PORTFOLIO4,
    title: 'Katana in BloodMoon',
    demo : 'https://www.behance.net/gallery/120091555/Katana-in-Bloodmoon/'
  },
  {
    id: 5,
    image : PORTFOLIO5,
    title: 'Simple Music Player Design',
    demo : 'https://www.behance.net/gallery/113177893/Simple-Music-Player/'
  },
  {
    id: 6,
    image : PORTFOLIO6,
    title: '"HER" Movie Design',
    demo : 'https://dribbble.com/shots/15020810-Favorite-Movie-Website'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt= {title}/>
          </div>

          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
              <a href={demo} className='btn btn-primary btn-margin' >Live Demo</a> 
          </div>
        </article>
        )
  })
}
        </div>
    </section>
  )
}

export default Portfolio