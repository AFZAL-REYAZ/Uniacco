import React from 'react'
import Card1 from './Card1'
import './Crousel1.css'
import {Data1} from './Data1'

const Crousel1 = () => {
    let box=document.querySelector('.cards-group');
    const slideprevious=()=>{
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft-width;
      console.log(width);
    }
    const slidenext=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft+width;
        console.log(width);
    }
  return (
    <div className='product-carousel'>
        <div className='btn_slide'>
          <div className='btn_slide_heading'>
          <h2>New This Week</h2>
          </div>
          <div className='btn_btnght'>
          <button className='pre-btn' onClick={slideprevious}><p>&lt;</p></button>
          <button className='next-btn' onClick={slidenext}><p>&gt;</p></button>
          </div>
        </div>

        <div className="cards-group">
            {Data1.map((value,id)=>{
                return <Card1 card_no='1' value={value}/>
            })}
        </div>
    </div>
  )
}

export default Crousel1