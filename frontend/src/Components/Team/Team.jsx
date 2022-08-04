import React from 'react'
import './Team.css'
import { AiOutlinePlus } from "react-icons/ai"
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";



export default function Team() {
  return (
    <div className='team'>
      <h1 className='section-title'>НАША КОМАНДА</h1>
      <div className='row'>
        <div className='left-person team-card'>
          <div className='front-side'>
            <div className='blue team-card-title'>
              <p>Нурсултан</p>
            </div>
            <p className='team-card-description'>Сооснователь и Генеральный Директор</p>
            <div className='footer-card'>
              <a href="#"><AiOutlinePlus/>More info</a>
            </div>
          </div>
          <div className='back-side'>
            <div>
              <p className='back-name'>Бердиев Нурсултан</p>
              <p>Бизнес Аналитик / Python разработчик</p>
              <p>Базы Данных (MSSQL, MySQL, PLSQL)</p>
              <p>Python (Scikit-learn, pandas, NumPy, bs4)</p>
              <p>FullStack веб разработка (Python Django, Flask, JavaScript, HTML, CSS)</p>
            </div>
            <div className='footer-card footer-back'>
              <a href="#"><FaFacebookF/></a>
              <a href="#"><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
        <div className='left-person team-card'>
          <div className='front-side'>
            <div className='red team-card-title'>
              <p>Эйнар</p>
            </div>
            <p className='team-card-description'>Сооснователь</p>
            <div className='footer-card'>
              <a href="#"><AiOutlinePlus/>More info</a>
            </div>
          </div>
          <div className='back-side'>
            <div>
              <p className='back-name'>Эйнар Токтомамбетов</p>
              <p>Системный/Сетевой Администратор</p>
              <p>Windows, Linux</p>
              <p>LAN, WAN, VLAN: Cisco IOS, TCP/IP, IP Addressing and Routing, VPN</p>
              <p>FullStack веб разработка (Python Django, Flask, JavaScript, HTML, CSS)</p>
            </div>
            <div className='footer-card footer-back'>
              <a href="#"><FaFacebookF/></a>
              <a href="#"><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
