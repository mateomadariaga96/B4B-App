import React from 'react'
import { Link } from 'react-router-dom'
import './Company.css'

const Company = ({ company }) => {
  const { id, logo, name, email, size, sector, description, location, opportunities, web, likedin, likes, comments, proposals} = company

  console.log(company);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="list">
            <div className="items p-2 bg-white px-3 border mt-2">
              <div className="d-flex user-info">
                <div className="d-flex flex-row align-items-center header">
                  <img className="rounded-circle mr-5" src={logo} width="100"/>
                  <div className="d-flex flex-column user-name-followers"><span><Link to={{pathname:`/business/profile`, state:{opportunity: company}}} className="d-block font-weight-bold">@{name}</Link></span>
                  </div>
                </div>
                <div>
                  <div className="buss-info mt-3">
                    <p>{sector}</p>
		                <p>{size}</p>
                    <hr></hr>
                    <p><b>Location: </b>{location}</p>
                    <hr></hr>
                    <p><b>Opportunities: </b> {opportunities.length}</p>
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