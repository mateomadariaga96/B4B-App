import React from 'react'
import './Comment.css'

const Comment = ({ comment }) => {
	const { id, text, business, opportunity, } = comment
	/* state = {
		text: '',
		business: '', //duda
		opportunity: '', //duda
	} */
  
	console.log(comment);

	//const errorClassName = this.state.error ? 'is-invalid' : ''
	return (
		<div>
			{/* <form onSubmit={this.handleSubmit}>
          		<div className="form-group">
            	<label htmlFor="name">Name</label>

            		<input
              		value={state.data.text}
              		onChange={handleChange}
              		autoComplete="off"
              		name="text"
              		type="text"
              		className={`form-control ${errorClassName}`}
              		id="text"
              		placeholder="Enter business name"
            		/>
          		</div>
		  	</form> */}
			<div className="comment-box">
				<div className="comment-name">
					<div>
                		<img class="rounded-circle comment-image" src={comment.business.logo} alt="author photo"/>
           			</div>
					<div className="namecom">
					   	<b> {comment.business.name}</b>
					</div>
					
				</div>
				<div className="comment">
					{comment.text}
				</div>
				<div className="comment-foot"><b>Created at:</b></div>
			</div>
			
			<hr></hr>
		</div>
		
	)
}

export default Comment