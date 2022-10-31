import React from 'react'
import './Header.css'
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  return (
    <div className='header_main_box'>
      <img src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg" alt="Loding" />
      <span className='become_hoste'>Become a Hoste</span>
      <LanguageIcon className='language'/>
      <div className="login">Login</div>
    </div>
  )
}

export default Header
