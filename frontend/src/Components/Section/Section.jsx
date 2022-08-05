import React from 'react'
import './Section.css'
import sectionImg from '../img/sectionImg.png'

export default function Section() {
  return (
    <div className='section'>
      <div className='section-description'>
        <h1>Key Dev</h1>
        <h2>ВАШ МОСТ К УСПЕХУ</h2>
        <p>Высококвалифицированная команда, которая специализируется на предоставлении аутсорс услуг в области информационных технологий и разработке веб приложений</p>
        <button>Связаться</button>
      </div>
      <div className='section-img'>
        <img src={sectionImg} alt="" />
      </div>
    </div>
  )
}
