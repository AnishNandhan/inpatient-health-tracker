import React, { useContext } from 'react'

import Form from '../components/Form'
import { UserContext } from '../contexts/UserContext'

const UpdatePatient = () => {

    const user = useContext(UserContext);

  return (
    <div className='update-patient container'>
        <h1>Update Patient Details</h1>
        <UserContext.Provider value={user}>
            <Form />
        </UserContext.Provider>
    </div>
  )
}

export default UpdatePatient