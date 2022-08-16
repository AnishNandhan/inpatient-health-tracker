import React, { useContext } from 'react'

import Form from '../components/Form'
import { UserContext } from '../contexts/UserContext'

const ViewPatient = () => {

    const user = useContext(UserContext);

    return (
        <div className='-view-patient'>
            <UserContext.Provider value={user}>
                <Form />
            </UserContext.Provider>
        </div>
    )
}

export default ViewPatient