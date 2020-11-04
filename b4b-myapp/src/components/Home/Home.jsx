import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
//import Product from './Product'
import Opportunity from './Opportunity'
import B4BService from '../../services/B4BService'
import './Home.css'

const Home =() => {
  const [ opportunities, setOpportunities ] = useState();
  const [ loading, setLoading ] = useState();
  //const [ products, setProducts ] = useState();
  
	  
 useEffect(() => {
  B4BService.getOpportunities()
  .then(opportunities => {
    console.log(opportunities);
    setOpportunities(opportunities)
})
},[])

 /* useEffect(() => {
  B4BService.getProducts()
      .then(products => {
        setProducts(products)
      })
},[]) */


useEffect(() => {
  opportunities && setLoading(true)
},[opportunities])

  
    return (
      !loading ? 'loading..' :
      <div className="Home">
      <div className="Opp-section">
      <h3>Latest Opportunitites</h3>
        <div className="Opportunities">
          {opportunities?.slice(0, 9).map((opp, i) => (
          <Opportunity opportunity={opp} key={i}/>
        ))}
	      </div>
      </div>
        
      {/* <div className="Product-section">
      <h3>Latest Products</h3>
        <div className="Products">
	        {products?.slice(0, 9).map((product, i) => (
		      <Product product={product} key={i}/>
	      ))}
        </div>
      </div> */}
	      
      </div>
    )
  
}

export default Home
