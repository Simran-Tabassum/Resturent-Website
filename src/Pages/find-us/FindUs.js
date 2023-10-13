import React from 'react'
import './FindUs.css'
import SubHeader from'../../Component/subheader/SubHeader'
import findus from '../../assert/findus.png'

const FindUs = () =>{
    return(
        <div className='find-us' id="contact">
            <div className='fint-us-info'>
                <SubHeader title="Contact"/>
                <h1 className='fint-us-info-heading'>Find Us</h1>
                <div className='fint-us-info-details'>
                    <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                    <h6 className='fint-us-info-details-text' style={{color: '#DCCA87'}}>Opening Hours</h6>
                    <p>Sat - Sun: 10:00 am - 03:00 am</p>
                    <p>Mon - Fri: 10:00 am - 02:00 am</p>
                </div>
                <button type='button' className='fint-us-info-details-button'>Visit Us</button>
            </div>
            <div className='fint-us-img'>
              <img src={findus} alt="findus" />
            </div>
        </div>
)}





export default FindUs