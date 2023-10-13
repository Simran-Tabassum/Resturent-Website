import React from 'react'
import './Newsletter.css'
import SubHeader from '../subheader/SubHeader'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='newsletter-box'>
            <div className='newsletter-heading'>
                <SubHeader title="Newsletter"/>
                <h1 className='newsletter-heading-text'>Subscribe To Our Newsletter</h1>
                <p className='newsletter-heading-para'>And never miss latest Updates!</p>
            </div>
            <div className='newsletter-input'>
                <input type="email" placeholder="Enter your email address" />
                <button type='button'>Subscribe</button>
            </div>
        </div>
    </div>
           
  )
}

export default Newsletter