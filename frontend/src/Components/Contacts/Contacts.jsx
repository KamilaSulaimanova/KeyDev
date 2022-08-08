import React from 'react'
import axios from 'axios'
import './Contacts.css'

const massagePostURL = 'http://127.0.0.1:8000/api/messages/send/'

export default function Contacts() {
  //send post request to server to send message with axios
  const sendMessage = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      phone: e.target.phone.value
    }
    axios.post(massagePostURL, data)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }
      )
  }
  

  return (
    <form className="contact-form" onSubmit={sendMessage}>
      <div className='contacts'>
        <h1 className='section-title'>СВЯЖИТЕСЬ С НАМИ</h1>
        <div className='contacts-row'>
          <input name="name" type="text" placeholder='Ф.И.О \ Наименование Организации'/>
          <input name="email" type="email" placeholder='Электронная Почта'/>
          <input name="phone" type="number" placeholder='Номер Телефона'/>
        </div>
        <div className='message'>
          <textarea name="message" placeholder='Напишите Нам Сообщение' required></textarea>
        </div>
        <button type='submit' className='contacts-button'>Отправить</button>
      </div>
    </form>
  )
}
