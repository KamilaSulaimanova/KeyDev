import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";


export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-row'>
           <a href="https://www.instagram.com/key_dev.kg/"><FaInstagram/></a>
           <a href="#"><FiFacebook/></a>
        </div>
        <div className='menu'>
            <a href="#">Главная</a>
            <a href="#">Услуги</a>
            <a href="#">О Нас</a>
            <a href="#">Контакты</a>
        </div>
        <p className='footer-description'>ОсОО "Кей Дев" © 2021</p>
    </div>
  )
}
