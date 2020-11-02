import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from '../Home/Opportunity'
import B4BService from '../../services/B4BService'

const Profile =({ location }) => {
	const [ profile, setProfile ] = useState(location.state.business);
	const [ loading, setLoading ] = useState();
	//const [ opportunities, setOpportunities ] = useState();
	//const [ products, setProducts ] = useState();
	console.log(location);
	
		
  //usar authcontect como en navbar para mi usuario
  //user.name
  
  if(profile.type === "Service Provider"){
	return (
		<div>
		<div>
			<img src={profile.logo} alt="opportunity image"></img>
		  <h3>{profile.name}</h3>
		  <p>{profile.sector}</p>
		  <p>{profile.type}</p>
		  <p>{profile.size}</p>
		  <p>{profile.web}</p>
		  <p>{profile.linkedin}</p>
		  <p>{profile.description}</p>
		  <p>{profile.opportunities}</p>

		</div>
  
			{/* <div>{profile.opportunities.map((opp, i) => (
			  <Opportunity opportunity={opp} key={i}/>
			))}
		  </div> */}
		</div>
	   
		
	  /* !loading ? 'loading..' :
	  <div className="Profile">
	  {profile?.map((profile, i) => (
			  <Profile profile={profile} key={i}/>
		  ))} */

	  /* <div className="Opp-section">
	  <h3>Ongoing Opportunitites</h3>
		<div className="Opportunities">
		  {opportunities?.map((opp, i) => (
		  <Opportunity opportunity={opp} key={i}/>
		))}
		  </div>
	  </div>
		
	  <div className="Product-section">
	  <h3>Company's Products</h3>
		<div className="Products">
			{products?.map((product, i) => (
			  <Product product={product} key={i}/>
		  ))}
		</div>
	  </div> */
		  
	  /* </div> */
	)
  } else {
	  return (
		<div>
		<div>
			<img src={profile.logo} alt="opportunity image"></img>
		  <h3>{profile.name}</h3>
		  <p>{profile.sector}</p>
		  <p>{profile.type}</p>
		  <p>{profile.size}</p>
		  <p>{profile.web}</p>
		  <p>{profile.linkedin}</p>
		  <p>{profile.description}</p>

		</div>
		</div>
	  )
  }
	  
  }
  
  export default Profile