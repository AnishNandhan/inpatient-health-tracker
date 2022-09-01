import React, { useContext } from 'react'

import UpdateForm from '../components/UpdateForm'
import { UserContext } from '../contexts/UserContext'

const UpdatePatient = () => {

    const user = useContext(UserContext);

  return (
    <div className='update-patient container'>
        <h1>Update Patient Details</h1>
        <UserContext.Provider value={user}>
            <UpdateForm />
        </UserContext.Provider>
    </div>
  )
}

export default UpdatePatient