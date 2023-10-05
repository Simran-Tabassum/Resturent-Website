import React from 'react'
import './SubHeader.css'
import spoon from '../../assert/spoon.png'

const SubHeader = (props) => {
  return (
    <div className='resturent-subheader'>
        <p className='resturent-subheader-title'>{props.title}</p>
        <img src={spoon} alt="spoon" className='resturent-subheader-spoon-img' />
    </div>
  )
}

export default SubHeader