import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from '../Home/Opportunity'
import B4BService from '../../services/B4BService'

const ExternalProfile =({ location }) => {
	const [ profile, setProfile ] = useState(location.state.opportunity);
	const [ loading, setLoading ] = useState();

	/* useEffect(() => {
	listBusinesses(location.state)
	.then
	},[]) */

	//const [ opportunities, setOpportunities ] = useState();
	//const [ products, setProducts ] = useState();
	console.log(profile);
  
	return (
		//!loading ? 'loading..' :
		<div>
		<div>
			<img src={profile.business.logo} alt="opportunity image"></img>
		  <h3>{profile.business.name}</h3>
		  <p>{profile.business.sector}</p>
		  <p>{profile.business.type}</p>
		  <p>{profile.business.size}</p>
		  <p>{profile.business.web}</p>
		  <p>{profile.business.linkedin}</p>
		  <p>{profile.business.description}</p>

		  <div className="Opportunities">
          	{profile.opportunity?.slice(0, 9).map((opp, i) => (
          	<Opportunity opportunity={opp} key={i}/>
        	))}
	      </div>
		  {/* <p>{profile.business.opportunities}</p> */}

		</div>
		</div>
	   
	)
  
}
  
export default ExternalProfile