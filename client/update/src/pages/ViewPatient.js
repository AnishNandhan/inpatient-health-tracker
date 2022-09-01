import React, { useContext } from 'react'

import UpdateForm from '../components/UpdateForm'
import { UserContext } from '../contexts/UserContext'

const ViewPatient = () => {

    const user = useContext(UserContext);

    return (
        <div className='-view-patient'>
            <UserContext.Provider value={user}>
                <UpdateForm />
            </UserContext.Provider>
        </div>
    )
}

export default ViewPatient