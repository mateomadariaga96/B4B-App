import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { logout } from '../services/B4BService'
import { Link } from 'react-router-dom'

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
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="/">B4B LOGO</a>

      <div className="d-flex align-items-center">
        <Link to="/products" className="d-block">Products</Link>
        <Link to="/services" className="d-block">Services</Link>
        <Link to="/business/myprofile" className="d-block">{authContext.user.name}</Link>
        <button onClick={handleLogout} type="button" className="btn btn-small btn-danger">Log out</button>
      </div>
    </nav>
  )
}

export default Navbar