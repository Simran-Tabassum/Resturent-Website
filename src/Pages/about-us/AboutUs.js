import React from 'react'
import './AboutUs.css'
import G from '../../assert/G.png'
import spoon from '../../assert/spoon.png'
import knife from'../../assert/knife.png'

const AboutUs= () => {
  return (
    <div className='resturent-AboutUs' id='about'>
        <div className='resturent-AboutUs-G-img'>
            <img src={G} alt="g-letter" />
        </div>
        <div className='resturent-AboutUs-content'>
            <div className='resturent-AboutUs-content-about'>
                <h1>About Us </h1>
                <img src={spoon} alt="spoon- img"  className='spoon-img'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button type='button' className='Know-more-button'>Know More</button>
            </div>
            <div className='resturent-AboutUs-content-knife-img'>
                <img src={knife} alt="knife-img" />
            </div>
            <div className='resturent-AboutUs-content-history'>
                <h1>Our History</h1>
                <img src={spoon} alt="spoon- img"  className='spoon-img'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button type='button' className='Know-more-button'>Know More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs