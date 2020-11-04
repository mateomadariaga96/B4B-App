import React from 'react'
import { Link } from 'react-router-dom'
//import './Company.css'

const Company = ({ business }) => {
  const { id, logo, name, email, size, sector, description, location, web, likedin, likes, comments, proposals} = business

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-6">
          <div className="list">
            <div className="items p-2 bg-white px-3 border mt-2">
              <div className="d-flex user-info">
                <div className="d-flex flex-row align-items-center header">
                  <img className="rounded-circle" src={logo} width="60"/>
                  <div className="d-flex flex-column user-name-followers"><span><Link to={{pathname:`/business/profile`, state:{opportunity: business}}} className="d-block font-weight-bold">@{name}</Link></span>
                  </div>
                  <hr/>
                </div>
                <div>
                  <div>
                    <p>{sector}</p>
		            <p>{size}</p>
                    <p>{location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company