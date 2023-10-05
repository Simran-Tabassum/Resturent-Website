import React from 'react'
import './Header.css'
import SubHeader from '../../Component/subheader/SubHeader'
import headerImg from '../../assert/welcome.png'

const Header = () => {
  return (
    <div className='resturent-header' id='home'>
        <div className='resturent-header-info'>
            <SubHeader title='Chase the new flavour'/>
            <h1 className='resturent-header-info-h1'>The Key To Find Dining</h1>
            <p className='resturent-header-info-description'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button type='button' className='resturent-header-info-explore-btn'>Explore Menu</button>
        </div>
        <div className='resturent-header-img'>
            <img src={headerImg} alt="headerImg" />
        </div>
    </div>
  )
}

export default Header