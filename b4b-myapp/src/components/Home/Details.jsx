import React, { useState, useEffect } from 'react'

const Details =({ location }) => {
	const [ detail, setProfile ] = useState(location.state.opportunity);
	const [ loading, setLoading ] = useState();
	//const [ opportunities, setOpportunities ] = useState();
	//const [ products, setProducts ] = useState();
	console.log(detail);
  
	return (
		//!loading ? 'loading..' :
		<div class="post-detail-page">
    		<div class="card mb-3">
       			<div class="card-header edit-post-card">
            		<div>
                	<img class="rounded-circle post-image" src={detail.business.logo} alt="author photo"/>
           		</div>
           		<div class="edit-post-head">
                <span class="card-title">{detail.title}</span>
                	<div class="text-muted">Published on {detail.createdAt}</div>
            	</div>

        		</div>
        		<div class="card-body">
				{detail.start} 
				{detail.duration}
				{detail.budget} 
				{detail.description}  
				</div>

        	<div class="card-footer">
            <button type="button" class="btn-sm btn btn-outline-danger" data-like-post="{{post._id}}">
                <i class="fa fa-heart mr-1"></i>
                <span class="likes-count">{detail.likes.length}</span>
                Likes
            </button>
            <span class="text-muted"> - {detail.comments.length} comments </span>
        	</div>

        	<b><h3>Comments:</h3></b>

        	<div class="row border-bottom">
            <div class="col-3">
                <img class="rounded-circle" src={detail.business.logo} alt="author photo"/>
            </div>
            {/* <div class="col-9">
                <h5>{detail.comments.business.name}</h5>
                <p>{detail.comments.text}</p>
                <br/>
                <p class="text-muted">{detail.comment.createdAt}</p>
            </div> */}
        	</div>

        	{/* <div class="edit-post-form">
            <form action="/post/{{post._id}}/comment" method="POST">
                <label for="comment">New comment:</label>
                <textarea class="form-control" name="comment" id="comment" placeholder="Your message"
                    required=""></textarea>
                <button type="submit" id="submit" class="btn btn-primary">Submit</button>
            </form>
        	</div> */}

    		</div>
		</div>
	   
	)
  
}
  
export default Details