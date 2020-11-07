import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from '../Home/Opportunity'
import { Link } from 'react-router-dom'
import LikeBtn from '../LikeBtn'
import ProposalBtn from '../ProposalBtn'
import './ExternalProfile.css'
import './Profile.css'

const ExternalProfile =({ location }) => {
	const [ profile, setProfile ] = useState(location.state.opportunity);
	const [ loading, setLoading ] = useState();

	console.log(profile);
  
	if (profile.business) {
		return (
			//!loading ? 'loading..' :
			<div>
			<div>
			<div class="container bootstrap-snippet header-container">
    			<div class="bg-white card-profile mt-5">
      				<div class="container py-5">
        				<div class="profile-container">
						<div className="profile-left">
							<img src={profile.business.logo} alt class="d-block rounded-circle profile-logo"/>

							<div className="profile-data">
								<p><b>{profile.business.sector}</b></p>
		  						<p>{profile.business.size}</p>
		  						<p>
								  <img className="icons" src="../web.png" />
								  <a href={profile.business.web}>Visit Website</a>
								</p>
								<p>
								<img className="icons" src="../linkedin.png" />
								<a href={profile.business.linkedin}>Visit LinkedIn Profile</a>
								</p>
							</div>
						</div>
						<vr></vr>
          				
          					<div class="media-body ml-5">
            					<h4 class="font-weight-bold mb-4 profile-title">{profile.business.name}</h4>
            						<div class="text-muted mb-4 profile-description">
									{profile.business.description}
            						</div>
									<hr></hr>
								<div className="user-interactions">
            					<a href="#" class="d-inline-block text-dark">
              					<strong>{profile.business.opportunities.length}</strong>
              					<span class="text-muted"> opportunities</span>
            					</a>
            					<a href="#" class="d-inline-block text-dark ml-3">
              					<strong>{profile.likes.length}</strong>
              					<span class="text-muted"> liked opportunities</span>
            					</a>
            					<a href="#" class="d-inline-block text-dark ml-3">
              					<strong>{profile.proposals.length}</strong>
              					<span class="text-muted"> proposals</span>
            					</a>
								</div>
          					</div>
        				</div>
      				</div>
    			</div>
			</div>
			<div className="Opportunities">
		  		<div className="title-opp-external">
		  			<h3><b>{profile.name}: Latest Opportunities</b></h3>
					<hr className="profile-line"></hr>
		  		</div>
		  
          		{profile.business.opportunities?.reverse().slice(0, 9).map((opp, i) => (
				<div>
					<div className="card opp-external-card">
  						<div className="card-body">
    						<h5 className="card-title">{opp.title}</h5>
							<hr></hr>
							<div>
					  			<div>
					  				<b>Start: </b>{opp.start}
					  			</div>
					  			<div>
					  				<b>Duration: </b>{opp.duration}
					  			</div>
					  			<div>
					  				<b>Budget: </b>{opp.budget}
					  			</div>
					  		</div>
							  <hr></hr>
    						<p className="card-text">{opp.description}</p>
  						</div>
						<div className="card-header opp-footer">
					  		<div className="opp-button">
					  			<button className="btn btn-primary">Make a proposal</button>
					  		</div>
  						</div>
					</div>
				</div>
        		))}
	      	</div>
	
		</div>
		</div>
		   
		)
	} else {
		return (
			//!loading ? 'loading..' :
			<div>
			<div>
			<div class="container bootstrap-snippet header-container">
    			<div class="bg-white card-profile mt-5">
      				<div class="container py-5">
        				<div class="profile-container">
						<div className="profile-left">
							<img src={profile.logo} alt class="d-block rounded-circle profile-logo"/>

							<div className="profile-data">
								<p><b>{profile.sector}</b></p>
		  						<p>{profile.size}</p>
		  						<p>
								  <img className="icons" src="../web.png" />
								  <a href={profile.web}>Visit Website</a>
								</p>
								<p>
								<img className="icons" src="../linkedin.png" />
								<a href={profile.linkedin}>Visit LinkedIn Profile</a>
								</p>
							</div>
						</div>
						<vr></vr>
          				
          					<div class="media-body ml-5">
            					<h4 class="font-weight-bold mb-4 profile-title">{profile.name}</h4>
            						<div class="text-muted mb-4 profile-description">
									{profile.description}
            						</div>
									<hr></hr>
								<div className="user-interactions">
            					<a href="#" class="d-inline-block text-dark">
              					<strong>{profile.opportunities.length}</strong>
              					<span class="text-muted"> opportunities</span>
            					</a>
            					<a href="#" class="d-inline-block text-dark ml-3">
              					<strong>{profile.likes.length}</strong>
              					<span class="text-muted"> liked opportunities</span>
            					</a>
            					<a href="#" class="d-inline-block text-dark ml-3">
              					<strong>{profile.proposals.length}</strong>
              					<span class="text-muted"> proposals</span>
            					</a>
								</div>
          					</div>
        				</div>
      				</div>
    			</div>
			</div>
			<div className="Opportunities">
		  <div className="title-opp-external">
		  	<h3><b>{profile.name}: Latest Opportunities</b></h3>
			<hr className="profile-line"></hr>
		  </div>
		  
          	{profile.opportunities?.reverse().slice(0, 9).map((opp, i) => (
			<div>
				<div class="card opp-external-card">
  					<div class="card-body">
					  <div>
					  		<div>
					  			<b>Start: </b>{opp.start}
					  		</div>
					  		<div>
					  			<b>Duration: </b>{opp.duration}
					  		</div>
					  		<div>
					  			<b>Budget: </b>{opp.budget}
					  		</div>
					  	</div>
						<hr></hr>
    				<h5 class="card-title">{opp.title}</h5>
					<hr></hr>
    				<p class="card-text">{opp.description}</p>
  					</div>
					  <div class="card-header opp-footer">
					  	<div className="opp-button">
					  		<button className="btn btn-primary">Make a proposal</button>
					  	</div>
    					
  					</div>
				</div>
			</div>
        	))}
	      	</div>
	
			</div>
			</div>
		   
		)
	}
	
  
}
  
export default ExternalProfile