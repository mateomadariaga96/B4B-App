import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
//import Product from './Product'
import Company from './Company'
import B4BService from '../../services/B4BService'

const BusinessList =({ location }) => {
	const [ companies, setCompanies ] = useState([]);
	const [ loading, setLoading ] = useState();

	useEffect(() => {
	B4BService.listBusinesses(location.state.sector)
	.then(response => setCompanies(response))
	
	},[]);

	console.log(companies);
  
	return (
		//!loading ? 'loading..' :
		<div className="Business">
      		<div className="Buss-section">
      			<h3>Businesses in {location.state.sector} sector</h3>
        	<div className="Businesses">
          		{companies.map((company, i) => (
         		<Company opportunity={company} key={i}/>
        		))}
	      	</div>
      		</div>
		</div>
	   
	)
  
}
  
export default BusinessList