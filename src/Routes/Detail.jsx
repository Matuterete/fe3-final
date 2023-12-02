import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from '../utils/Context'
import '../Components/styles/Detail.css'


const Detail = () => {
  const { id } = useParams();
  const { state, fetchDataDetail } = useContext();

  useEffect(() => {
    if (id) {
      fetchDataDetail(id);
    }
  }, [id]);

  const dentist = state.dentist;

  if (!dentist || Object.keys(dentist).length === 0) {
    return <p className='Detail NotFound'>Dentist Not Found</p>;
  }

  return (
    <div className='Detail'>
      <div className='IdDent'>
        <h1>Detalle Dentista {dentist.id}</h1>
      </div>
      <div className='Section'>
        <p>Name: {dentist.name}</p>
      </div>
      <div className='Section'>
        <p>Email: {dentist.email}</p>
      </div>
      <div className='Section'>
      <p>Phone: {dentist.phone}</p>
      </div>
      <div className='Section'>
        <p>Website: {dentist.website}</p>
      </div>
    </div>
  );
};

export default Detail;