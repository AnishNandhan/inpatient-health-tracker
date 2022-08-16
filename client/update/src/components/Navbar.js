import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-heading'>
            <a href='/'><h1>Health</h1></a>
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='patients/create'>New Patient</Link></li>
          <li><Link to='#'>Signup / Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar