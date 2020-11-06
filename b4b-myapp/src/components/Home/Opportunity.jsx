import React from 'react'
import { Link } from 'react-router-dom'
import LikeBtn from '../LikeBtn'
import ProposalBtn from '../ProposalBtn'
import './Opportunity.css'

const Opportunity = ({ opportunity }) => {
  const { id, business, likes, description, title, start, duration, budget, comments, createdAt,proposals} = opportunity

  console.log(opportunity);

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="list">
            <div className="items bg-white mt-3">
              <div className="d-flex user-info">
                <div className="d-flex flex-row align-items-center header">
                  <img className="rounded-circle" src={business.logo} width="120"/>
                  <div className="d-flex flex-column user-title"><span className="font-weight-bold title">{title}</span><span><b><Link to={{pathname:`/business/profile`, state:{opportunity}}} className="d-block name">@{business.name}</Link></b></span>
                  </div>
                  <hr/>
                </div>
                <div>
                <hr></hr>
                  <div className="oppinfo">
                    <p><b>Start Date: </b> {start}</p>
		                <p><b>Duration: </b>{duration}</p>
		                <p><b>Budget: </b>{budget}</p>
                    <hr></hr>
                    <p className="about-title"><b>Opportunity's Description</b></p>
                    <p className="about">{description}</p>
                  </div>
                  <div className="footer">
                    <div className="interactions mt-1">
                    <div>
                      <LikeBtn likes={likes} oppId={id} />
                    </div>
                    <div className="comments">
                      <span><b>comments:</b> {comments.length} | </span>
                      <Link to={{pathname:`/opportunity-details`, state:{opportunity}}} >Add Comment</Link>
                      </div>
                      <div>
                      <ProposalBtn/>
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

