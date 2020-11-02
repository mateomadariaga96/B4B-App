import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from '../Home/Opportunity'
import B4BService from '../../services/B4BService'

const ExternalProfile =({ location }) => {
	const [ profile, setProfile ] = useState(location.state.opportunity);
	const [ loading, setLoading ] = useState();
	//const [ opportunities, setOpportunities ] = useState();
	//const [ products, setProducts ] = useState();
	console.log(profile);
  
  if(profile.business.type === "Service Provider"){
	return (
		!loading ? 'loading..' :
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
		  <p>{profile.opportunities}</p>

		</div>
		</div>
	   
	)
  } else {
	  return (
		<div>
		<div>
			<img src={profile.business.logo} alt="product image"></img>
			<h3>{profile.business.name}</h3>
		  <p>{profile.business.sector}</p>
		  <p>{profile.business.type}</p>
		  <p>{profile.business.size}</p>
		  <p>{profile.business.web}</p>
		  <p>{profile.business.linkedin}</p>
		  <p>{profile.business.description}</p>
		  <p>{profile.opportunities}</p>
		</div>
		</div>
	  )
  }
	  
  }
  
  export default ExternalProfile