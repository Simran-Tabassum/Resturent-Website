import React from 'react'
import './Items.css'

function Items(props) {
  return (
    <div className='items'>
      <div className='items-heading'>
        <div className='items-details'>
          <p className='items-details-name '>{props.items}</p>
        </div>
        <div className='items-details-dash'></div>
        <div className='items-details-price-div'>
          <p className='items-details-price' style={{color:'#FFFFFF'}}>{props.price}</p>
        </div>
      </div>
        <div className='items-details-sub'>
          <p className='items-details-sub-titel'>{props.bottel}</p>
        </div>
        
    </div>
  )
}

export default Items