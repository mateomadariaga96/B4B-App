import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from '../Home/Opportunity'
import B4BService from '../../services/B4BService'

const Profile =({ location }) => {
	const authContext = useAuthContext()
	console.log(authContext.user);
	const [ opportunities, setOpportunities ] = useState();
	const [ loading, setLoading ] = useState();

	useEffect(() => {
		B4BService.getOpportunities()
		.then(opportunities => {
		  console.log(opportunities);
		  setOpportunities(opportunities)
	  })
	  },[])

	useEffect(() => {
		opportunities && setLoading(true)
	},[opportunities])
		
  //usar authcontect como en navbar para mi usuario
  //user.name

	return (
		!loading ? 'loading..' :
		<div>
		<div>
			<img src={authContext.user.logo} alt="opportunity image"></img>
		  <h3>{authContext.user.name}</h3>
		  <p>{authContext.user.sector}</p>
		  <p>{authContext.user.type}</p>
		  <p>{authContext.user.size}</p>
		  <p>{authContext.user.web}</p>
		  <p>{authContext.user.linkedin}</p>
		  <p>{authContext.user.description}</p>
		  {/* <div className="Opportunities">
          	{authContext.user.opportunities?.slice(0, 9).map((opp, i) => (
          	<Opportunity opportunity={opp} key={i}/>
        	))}
	      </div> */}

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
	  
}
  
export default Profile