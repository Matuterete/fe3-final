import React from 'react'
import DoctorImage from '../assets/images/doctor.jpg'
import { Link } from 'react-router-dom'
import './styles/Card.css'
import ButtonFav from './BtnFav/BtnFav.jsx'
import Info from '../assets/Info.svg'

const Card = ({ dentist }) => {

  return (
    <div className="card">
        <div className="card-header">
          <Link className="circle-button info" to={`/detalle/${dentist.id}`}>
            <img src={Info}></img>
          </Link>
          { <ButtonFav dentist={dentist}/>}
        </div>
        <div className="card-body">
          <img src={DoctorImage} alt="Doctor"/>
          <h5 className="card-title-sm">{dentist.name}</h5>
          <h6 className="card-label-sm">{dentist.username}</h6>
        </div>
        <p className="id">{dentist.id}</p>
    </div>
  )
}

export default Card