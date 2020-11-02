import React from 'react'
import { Link } from 'react-router-dom'
import LikeBtn from '../LikeBtn'

const Opportunity = ({ opportunity }) => {
  const { id, business, likes, description, title, start, duration, budget, comments, proposals} = opportunity

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
	  	<div className="opp-image">
		  <img src={business.logo} alt="opportunity image"></img>
		</div>
      <p className="card-subtitle mb-2 text-muted">{title}</p>

      <p className="card-text">
        {description}
      </p>
		  <p>{start}</p>
		  <p>{duration}</p>
		  <p>{budget}</p>
		<Link to={{pathname:`/business/profile`, state:{opportunity}}} className="d-block">@{business.name}</Link>
    <Link to={`opportunity/${id}/proposal`}>Make a proposal</Link>
  

      <LikeBtn likes={likes} oppId={id} />

      </div>
    </div>
  )
}

export default Opportunity