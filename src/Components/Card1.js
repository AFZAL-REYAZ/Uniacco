import React from 'react'
import './Card1.css'
const Card1 = ({value}) => {
  
  return (
    <div className='mycard'>
      
       { value && Object.keys(value).map((val,id)=>{
       return ( 
       <>
       <img src={Object.values(value)[id]} alt="loding"/>
       </>
       )
       })}
    </div>
  )
}

export default Card1