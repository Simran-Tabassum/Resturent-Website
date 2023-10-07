import React from 'react'
import './Chef.css'
import SubHeader from '../../Component/subheader/SubHeader'
import chef from '../../assert/chef.png'
import quote from '../../assert/quote.png'
import sign from '../../assert/sign.png'

function Chef() {
  return (
    <div className='chef'>
        <div className='chef-image'>
          <img src={chef} alt="chef" />
        </div>
        <div className='chef-content'>
          <SubHeader title='Chef’s Word' />
          <h1 className='chef-content-heading'>What we believe in</h1>

          <div className='chef-content-about'>
            <div className='chef-content-about-quote'>
              <img src={quote} alt="quote-img" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac  </p>
          </div>

          <div className='chef-content-signeture'>
            <p className='chef-content-signeture-kevin-luo'>Kevin Luo</p>
            <p className='chef-content-signeture-chef-founder'>Chef & Founder</p>
            <img src={sign} alt="sign-img" />
          </div>
        </div>
    </div>
  )
}

export default Chef