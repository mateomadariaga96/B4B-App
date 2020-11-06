import React, { useState, useEffect } from 'react'
import LikeBtn from '../LikeBtn'
import Comment from './Comment'
import './Details.css'

const Details =({ location }) => {
	const [ detail, setProfile ] = useState(location.state.opportunity);
	const [ loading, setLoading ] = useState();
	//const [ opportunities, setOpportunities ] = useState();
	//const [ products, setProducts ] = useState();
	console.log(detail);
  
	return (
		//!loading ? 'loading..' :
		<div class="post-detail-page">
    		<div class="card col-sm-8 col-md-8 col-lg-8 mb-3 mt-3 detail">
       			<div class="card-header edit-post-card">
            		<div>
                	<img class="rounded-circle post-image" src={detail.business.logo} alt="author photo"/>
           			</div>
           			<div class="edit-post-head">
               		<span class="card-title"><b>{detail.title}</b></span>
                	<div>@{detail.business.name}</div>
            	</div>

        		</div>
        		<div class="card-body">
				{detail.start} 
				{detail.duration}
				{detail.budget} 
				{detail.description}  
				</div>

        	<div class="card-footer">
            <div className="interactions">
                <LikeBtn likes={detail.likes} oppId={detail.id} />
            </div>
			<div className="interactions">
				<span class="text-muted"><b>Comments </b>- {detail.comments.length} comments </span>
			</div>
            
        	</div>
			<div className="comments-title">
				<b><h3>Comments:</h3></b>
			</div>

        	<div class="row border-bottom">
            <div class="col-10 boxy">
			<div className="Comments">
          		{detail.comments?.slice(0, 9).map((comment, i) => (
					<Comment comment={comment} key={i}/> 
        		))}
	      	</div>
            </div>
        	</div>

    		</div>
		</div>
	   
	)
  
}
  
export default Details