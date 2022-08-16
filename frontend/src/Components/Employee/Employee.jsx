import React from 'react'
import axios from 'axios';
import './Employee.css'
import { AiOutlinePlus } from "react-icons/ai"
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";


const baseURL = 'http://127.0.0.1:8000/api/employee/'

export default function Employee() {
  const [employees, setEmployees] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      setEmployees(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  // render () {
  //   const background_color = this.employee.background_color;
  

  return (
    <div className='team' id='team'>
      <h1 className='section-title'>НАША КОМАНДА</h1>
      {employees?.map(employee => (
        <div key={employee.id}>
          <div className='row'>
            <div className='left-person team-card'>
              <div className='front-side'>
                <div className={`${employee.background_color} team-card-title`}>
                  <p>{employee.first_name}</p>
                </div>
                <p className='team-card-description'>{employee.title}</p>
                <div className='footer-card'>
                  <a href="#"><AiOutlinePlus />More info</a>
                </div>
              </div>
              <div className='back-side'>
                <div>
                  <p className='back-name'>{employee.first_name} {employee.last_name}</p>
                  <p>{employee.stack_set.skill}</p>
                </div>
                <div className='footer-card footer-back'>
                  <a href={employee.facebook} target="_blank"><FaFacebookF /></a>
                  <a href={employee.linkedin} target="_blank"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
