import React from 'react'
import './Contacts.css'

export default function Contacts() {
  return (
    <div className='contacts'>
      <h1 className='section-title'>СВЯЖИТЕСЬ С НАМИ</h1>
      <div className='contacts-row'>
        <input type="text" placeholder='Ф.И.О \ Наименование Организации'/>
        <input type="email" placeholder='Электронная Почта'/>
        <input type="number" placeholder='Номер Телефона'/>
      </div>
      <div className='message'>
        <textarea name="message" placeholder='Напишите Нам Сообщение' required></textarea>
      </div>
      <button className='contacts-button'>Отправить</button>
    </div>
  )
}
