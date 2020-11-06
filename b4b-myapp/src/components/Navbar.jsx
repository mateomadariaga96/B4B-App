import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { logout } from '../services/B4BService'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const authContext = useAuthContext()

  if (!authContext.user) {
    return null
  }

  const handleLogout = async () => {
    try {
      await logout()

      authContext.logout()
    } catch(err) {
      console.error(err)
    }
  }

  //user.name ejemplo 

  return (
    <nav className="navbar navbar-light justify-content-between">
      <div class="navbar-brand">
        <img src="../b4b-logo.png" alt="logo" />
      </div>

      <div className="d-flex align-items-center">
      <div className="nav-menu">
        <div>
          <i class="fa fa-home"></i>
          <b><Link to="/home" className="d-block linky">Home</Link></b>
        </div>
        <div>
          <b><Link to="/services" className="d-block linky">Sectors</Link></b>
        </div>
        <div>
          <b><Link to="/business/myprofile" className="d-block linky">My Profile</Link></b>
        </div>
      </div>
      <div>
        <button onClick={handleLogout} type="button" className="btn btn-small btn-outline-danger log-out">Log out</button>
      </div>
      </div>
      {/* <div id="navbar-elements" class="dropdown">
        <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action" role="button"
        id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
        <img src={authContext.user.logo} class="avatar" alt="Avatar"/>
        {authContext.user.name}
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a href="/business/myprofile" class="dropdown-item"><i class="fa fa-user-o"></i> My profile</a>
        <div class="divider dropdown-divider"></div>
        <button onClick={handleLogout} type="button" className="btn btn-small btn-danger dropdown-item">Log out</button>
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar

