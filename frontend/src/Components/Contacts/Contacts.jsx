import React from 'react'
import axios from 'axios'
import './Contacts.css'

const massagePostURL = 'http://127.0.0.1:8000/api/messages/send/'

export default function Contacts() {
  //send post request to server to send message with axios
  const sendMessage = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      phone: e.target.phone.value
    }
    console.log(data)
    axios.post(massagePostURL, data)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }
      )
  }
  

  return (
      <div className='contacts'>
          <form className="contact-form" onSubmit={sendMessage}>
            <h1 className='section-title'>СВЯЖИТЕСЬ С НАМИ</h1>
            <div className='contacts-row'>
              <input name="name" type="text" placeholder='Ф.И.О \ Наименование Организации' required/>
              <input name="email" type="email" placeholder='Электронная Почта' required/>
              <input name="phone" type="number" placeholder='Номер Телефона' required/>
            </div>
            <div className='message'>
              <textarea name="message" placeholder='Напишите Нам Сообщение' required></textarea>
            </div>
            <button type='submit' className='contacts-button'>Отправить</button>
          </form>
      </div>
  )
}
