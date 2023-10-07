import React from 'react'
import './Laurels.css'
import SubHeader from '../../Component/subheader/SubHeader'
import LaurelsAwards from '../../Component/laurels-awards/LaurelsAwards'
import award1 from"../../assert/award01.png"
import award2 from"../../assert/award02.png"
import award3 from"../../assert/award03.png"
import award4 from"../../assert/award05.png"
import foodimg from "../../assert/laurels.png"

function Laurels() {
  return (
    <div className='laurels' id='awards'>
      <div className='laurels-information'>
        <SubHeader title="Awards & recognition"/>
        <h1 className='laurels-information-heading'>Our Laurels</h1>
        <div className='laurels-information-award'>
          <LaurelsAwards img={award1} title="Bib Gourmond" para="Lorem ipsum dolor sit amet, consectetur."/>
          <LaurelsAwards img={award2} title="Rising Star" para="Lorem ipsum dolor sit amet, consectetur."/>
          <LaurelsAwards img={award3} title="AA Hospitality" para="Lorem ipsum dolor sit amet, consectetur."/>
          <LaurelsAwards img={award4} title="Outstanding Chef" para="Lorem ipsum dolor sit amet, consectetur."/>
        </div>
      </div>
      <div className='laurels-image'>
        <img src={foodimg} alt="laurels-img" />
      </div>
    </div>
  )
}

export default Laurels