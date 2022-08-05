import React from 'react'
import './Services.css'
import axios from 'axios';
import { SiDevdotto } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";

const baseURL = 'http://127.0.0.1:8000/services/'

export default function Services() {
  const [services, setServices] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      setServices(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);


  return (
    <div className='services'>
        <h1 className='section-title'>НАШИ УСЛУГИ</h1>
        <p className='services-description'>Мы предоставляем следующие виды услуг</p>
        <div className='services-row'>
          {services && services.map(service => (
            <div className='services-card' key={service.id}>
              <div className='card-icon'><SiDevdotto/></div>
              <p className='services-card-title'>{service.name}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
