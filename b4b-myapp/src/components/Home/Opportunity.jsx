import React from 'react'
import { Link } from 'react-router-dom'
import LikeBtn from '../LikeBtn'
import ProposalBtn from '../ProposalBtn'
import './Opportunity.css'

const Opportunity = ({ opportunity }) => {
  const { id, business, likes, description, title, start, duration, budget, comments, proposals} = opportunity

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-6">
          <div className="list">
            <div className="items p-2 bg-white px-3 border mt-2">
              <div className="d-flex user-info">
                <div className="d-flex flex-row align-items-center header">
                  <img className="rounded-circle" src={business.logo} width="60"/>
                  <div className="d-flex flex-column user-name-followers"><span className="font-weight-bold">{title}</span><span><b><Link to={{pathname:`/business/profile`, state:{opportunity}}} className="d-block">@{business.name}</Link></b></span>
                  </div>
                  <hr/>
                </div>
                <div>
                  <div>
                    <p>{start}</p>
		                <p>{duration}</p>
		                <p>{budget}</p>
                    <p className="about">{description}</p>
                    <div className="d-flex flex-row mb-3">
                    <LikeBtn likes={likes} oppId={id} />
                    <div className="comments">
                      <span className="text-muted">comments: {comments.length} | </span>
                      <Link to={{pathname:`/opportunity-details`, state:{opportunity}}} >Comments</Link><span><ProposalBtn/></span>
                    </div>
                    </div>
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

export default Opportunity

