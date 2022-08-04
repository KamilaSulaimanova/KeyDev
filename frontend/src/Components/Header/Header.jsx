import React, { useState } from 'react'
import './Header.css'
import img from '../img/logo.png'

export default function Header() { 
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    if(window.scrollY >= 30){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader)
  return (
    <div className={header ? 'header active' : 'header'}>
        <div>
            <img className='logo' src={img} alt="" />
        </div>
        <div className='menu'>
            <a href="#">Главная</a>
            <a href="#">Услуги</a>
            <a href="#">О Нас</a>
            <a href="#">Контакты</a>
        </div>
    </div>
  )
}
