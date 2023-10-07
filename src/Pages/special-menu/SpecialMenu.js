import React from 'react'
import'./SpecialMenu.css'
// import {images,data} from '../../constants'
import SubHeader from'../../Component/subheader/SubHeader'
import Items from '../../Component/items/Items'
import menuImg from '../../assert/menu.png'

function SpecialMenu() {
  return (
    <div className='resturent-special-menu' id='menu'>
      <div className='resturent-special-menu-title'>
        <SubHeader title='Menu that fits your palatte'/>
        <h1 className='resturent-special-menu-title-todays-special-text'>Todays Special</h1>
      </div>
      <div className='resturent-special-menu-list'>
        <div className='resturent-special-menu-list-wine-beer'>
          <p className='resturent-special-menu-list-wine-beer-heading'>Wines & Beer</p>
          <div className='resturent-special-menu-list-wine-beer-items'>
            <Items items='Chapel Hill Shiraz' price='$56' bottel='AU | Bottle'/>
            <Items items='Catena Malbec' price='$59' bottel='AR | Bottle'/>
            <Items items='La Vieille Rosé' price='$44' bottel='FR | 750 ml'/>
            <Items items='Rhino Pale Ale' price='$31' bottel='CA | 750 ml'/>
            <Items items='Irish Guinness' price='$26' bottel='IE | 750 ml'/>
          </div>
        </div>
        <div className='resturent-special-menu-list-wine-beer-img'>
            <img src={menuImg} alt="menuImg" />
        </div>
        <div className='resturent-special-menu-list-cocktails'>
          <p className='resturent-special-menu-list-cocktails-heading'>Cocktails</p>
          <div className='resturent-special-menu-list-items'>
            <Items items='Aperol Spritz' price='$20' bottel='Aperol | Villa Marchesi prosecco | soda | 30ml'/>
            <Items items='Dark N Stormy ' price='$16' bottel='ADark rum | Ginger beer | Slice of lime.'/>
            <Items items='Daiquiri' price='$10' bottel='Rum | Citrus juice | Sugar'/>
            <Items items='Old Fashioned' price='$31' bottel='Bourbon | Brown sugar | Angostura Bitters'/>
            <Items items='Negroni' price='$26' bottel='Gin | Sweet Vermouth | Campari | Orange garnish'/>
          </div>
        </div>
      </div>
      <button type='button' className='Know-more-button'>View More</button>
    </div>
  )
}

export default SpecialMenu