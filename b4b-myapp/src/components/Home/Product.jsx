/* import React from 'react'
//import ProdLikeBtn from '../ProdLikeBtn'

const Product = ({ product }) => {
  const { id, business, productlikes, description, title, price, image, paytype, web} = product

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
	  	  <div className="product-image">
		      <img src={image} alt="product image"/>
		    </div>
        <p className="card-subtitle mb-2 text-muted">{title}</p>

        <p className="card-text">
          {description}
        </p>
		    <p>{price}</p>
		    <p>{paytype}</p>
		    <p>{web}</p>

      <a href={`business/${business.id}/profile`} className="d-block">@{business.name}</a> 

        <ProdLikeBtn likes={productlikes} productId={id} />
      </div>
    </div>
  )
} */

export default Product