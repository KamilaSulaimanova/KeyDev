import React, { useState } from 'react'
import './Header.css'
import img from '../img/logo.png'

export default function Header() { 
  const [header, setHeader] = useState(false);
  const [active, setActive] = useState(false);

  const handelmenu = (e) => {
    e.preventDefault()
    setActive(!active);
  }
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
          <a href="#section">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#team">О Нас</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className='mobile-menu'>
          <a href="" className="menu-btn" onClick={handelmenu}>
            {active ? 
            <div>
              <a className='menu-active'>
              <span></span>
              </a>
              <div className='side-bar'>
               <div className='menu-side-bar'>
                <a href="#section">Главная</a>
                <a href="#services">Услуги</a>
                <a href="#team">О Нас</a>
                <a href="#contacts">Контакты</a>
               </div>
              </div>
            </div> 
              : 
              <span></span>}
          </a>
        </div>
    </div>
  )
}
