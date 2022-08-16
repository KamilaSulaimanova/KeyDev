import React, { useState } from 'react' 
import './Header.css' 
import img from '../img/logo.png' 
import { FaBars } from "react-icons/fa"; 
 
 
export default function Header() {  
  const [header, setHeader] = useState(false); 
  const [sidebar, setSidebar] = useState(false) 
 
  const handleSidebar = () => { 
    setSidebar((prevState) => !prevState) 
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
      <div className={sidebar ? 'backdrop backdrop-open' : 'backdrop'} onClick={handleSidebar}></div> 
        <div> 
            <img className='logo' src={img} alt="" /> 
        </div> 
        <div className='menu'> 
            <a href="#section">Главная</a> 
            <a href="#services">Услуги</a> 
            <a href="#team">О Нас</a> 
            <a href="#contacts">Контакты</a> 
        </div> 
        <div className='burger-menu'> 
          <a href="#" className='burger-icon' onClick={handleSidebar}><FaBars/></a> 
          <div className={sidebar ? 'side-bar side-bar-open' : 'side-bar'}> 
            <a href="#section">Главная</a> 
            <a href="#services">Услуги</a> 
            <a href="#team">О Нас</a> 
            <a href="#contacts">Контакты</a> 
          </div> 
        </div> 
    </div> 
  ) 
}