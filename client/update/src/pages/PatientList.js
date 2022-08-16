import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PatientContext } from '../contexts/PatientContext'

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/patients');
            const json = await response.json();

            if (response.ok) {
                console.log(json);
                setPatients(json);
            }
        }
        fetchPatients();
    }, [])

  return (
    <div className='container patient-list'>
        {patients && patients.map((patient) => (
            <div className='patient' key={patient._id}>
                <div className='patient-short-details'>
                    <h3>{patient.name}</h3>
                    <p>Age: {patient.age}</p>
                    <p>Gender: {patient.gender}</p>
                    <p>Date of Admission: {patient.createdAt}</p>
                </div>
                <div className='p-btns'>
                    <PatientContext.Provider>
                        <Link to={`/patients/${patient._id}`}><button>View Details</button></Link>
                    </PatientContext.Provider>
                    <button>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default PatientList