import React from 'react'
import './LaurelsAwards.css'

const LaurelsAwards = (props) => {
  return (
    <div className='laurels-awards'>
         <img src={props.img} alt="award-img" />
         <div className='laurels-awards-info'>
            <p className='laurels-awards-info-tital' style={{color:'#DCCA87'}}>{props.title}</p>
            <p className='laurels-awards-info-para'>{props.para}</p>
         </div>
    </div>
  )
}

export default LaurelsAwards