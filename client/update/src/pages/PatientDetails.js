import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const PatientDetails = () => {
  const [patient, setPatient] = useState({});
  
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await fetch(`/api/patients/${id}`);
      const json = await response.json();

      if (response.ok) {
        console.log(json)
        setPatient(json);
      }
    }

    fetchPatient();
  }, [])

  return (
    <div className=''>
        <h1>{patient.name}</h1>
    </div>
  )
}

export default PatientDetails