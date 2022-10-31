import React from 'react'
import './Card1.css'
import './Crousel2.css'
import { Data2 } from './Data2'

const Crousel2 = () => {
    let box=document.querySelector('.cards-group2');
    const slideprevious2=()=>{
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft-width;
      console.log(width);
    }
    const slidenext2=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft+width;
        console.log(width);
    }
    
  return (
    <div className='product-carousel'>
      <div className="btn_slide">
        <div className='btn_slide_heading'>
          <h4>Top sellers</h4>
        </div>
        <div className='btn_btnght'>
          <button className='pre-btn' onClick={slideprevious2}><p>&lt;</p></button>
          <button className='next-btn' onClick={slidenext2}><p>&gt;</p></button>
        </div>
      </div>

        <div className="cards-group2">
            {
                Data2.map((val,id)=>{
                    return (
                    <div className="mycard2">
                      <div className='mycard_img_box'>
                        <img src={val.image} alt="loding" />
                      </div>
                        <h6>{val.name}</h6>
                        <h4>Price: {val.price}/-</h4>
                    </div>
                )})
            }
        </div>
    </div>
  )
}

export default Crousel2