import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import LikeBtn from '../LikeBtn'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from '../Home/Opportunity'
import B4BService from '../../services/B4BService'
import './Profile.css'

const Profile =({ location }) => {
	const authContext = useAuthContext()
	console.log(authContext.user);

		
  //usar authcontect como en navbar para mi usuario
  //user.name

	return (
		<div>
		<div>
			<div class="container bootstrap-snippet header-container">
    			<div class="bg-white card-profile mt-5">
      				<div class="container py-5">
        				<div class="profile-container">
						<div className="profile-left">
							<img src={authContext.user.logo} alt class="d-block rounded-circle profile-logo"/>

							<div className="profile-data">
								<p><b>{authContext.user.sector}</b></p>
		  						<p>{authContext.user.type}</p>
		  						<p>{authContext.user.size}</p>
		  						<p>
								  <img className="icons" src="../web.png" />
								  <a href={authContext.user.web}>Visit Website</a>
								</p>
								<p>
								<img className="icons" src="../linkedin.png" />
								<a href={authContext.user.linkedin}>Visit LinkedIn Profile</a>
								</p>
							</div>
						</div>
          				
          					<div class="media-body ml-5">
            					<h4 class="font-weight-bold mb-4 profile-title">{authContext.user.name}</h4>
            						<div class="text-muted mb-4 profile-description">
									{authContext.user.description}
            						</div>
									<hr></hr>
								<div className="user-interactions">
            					<a href="#" class="d-inline-block text-dark">
              					<strong>{authContext.user.opportunities.length}</strong>
              					<span class="text-muted"> opportunities</span>
            					</a>
            					<a href="#" class="d-inline-block text-dark ml-3">
              					<strong>{authContext.user.likes.length}</strong>
              					<span class="text-muted"> liked opportunities</span>
            					</a>
            					<a href="#" class="d-inline-block text-dark ml-3">
              					<strong>{authContext.user.proposals.length}</strong>
              					<span class="text-muted"> proposals</span>
            					</a>
								</div>
          					</div>
        				</div>
      				</div>
    			</div>
			</div>

		  <div className="prop-title">
		  <h3><b>Last Proposals Made</b></h3>
		  <hr></hr>
		  </div>
		  <div className="Proposals">
          	{authContext.user.proposals?.slice(0, 3).map((prop, i) => (
			<div className="card prop-card">
				<div class="card-header">
					{prop.status}
  				</div>
				<div class="card-body card-body1">
    				<h6 class="card-title">{prop.title}</h6>
					<hr></hr>
    				<p class="card-text">{prop.description}</p>
    				<a href="#" class="btn btn-danger">Delete</a>
  				</div>
			</div>
        	))}
	      </div>
		  <div className="Opportunities">
		  <div className="title-opp">
		  	<h3><b>My Latest Opportunities</b></h3>
			<hr className="profile-line"></hr>
		  </div>
		  
          	{authContext.user.opportunities?.reverse().map((opp, i) => (
			<div>
				<div class="card opp-profile-card">
  					<div class="card-body">
    				<h5 class="card-title">{opp.title}</h5>
					<hr></hr>
    				<p class="card-text">{opp.description}</p>
  					</div>
					  <div class="card-header opp-footer">
					  <div>
					  <b>{opp.start}</b>
					  </div>
					  <div>
					  <b>{opp.duration}</b>
					  </div>
					  <div>
					  <b>{opp.budget}</b>
					  </div>
					  <a href="#" class="btn btn-danger delete">Delete</a>
    					
  					</div>
				</div>
			</div>
        	))}
	      </div>

		</div>
  
			{/* <div>{profile.opportunities.map((opp, i) => (
			  <Opportunity opportunity={opp} key={i}/>
			))}
		  </div> */}
		</div>
	)
	  
}
  
export default Profile