import React, { useState } from 'react'
import B4BService from '../../services/B4BService'
import { useAuthContext } from '../../contexts/AuthContext'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './NewOpp.css'

const NewOpp = () => {
	const loc = useHistory()
	const {user} = useAuthContext()
  	const [data, setData] = useState({
    title: '',
	description: '',
	budget: '',
	start: '',
	duration: '',
	})
	  
	const handleChange = (event) => {
		const { name, value } = event.target
	
		setData({
			...data,
			[name]: value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const newData = {
		  ...data,
		  business: user.id,
		}
	
		  B4BService.createOpp(newData)
			.then((response) => {
			  console.log("newData", response);
			  loc.replace("/home")
			})
			.catch(() => {
			  //setState({ error: true, loading: false })
			})
	}

	return (
		<div className="New-form">
			<div className="new-title">
				<h3>Create an opportunity</h3>
			</div>
			
		<div className="form-box">
		  	<form onSubmit={handleSubmit}>
			<div className="form-group">
			  <label htmlFor="title"><b>Title</b></label>
  
			  <input
				value={data.title}
				onChange={handleChange}
				autoComplete="off"
				name="title"
				type="text"
				className={`form-control`}
				id="title"
				placeholder="Short title describing proposal"
			  />
			</div>
  
			<div className="form-group description-box">
			  <label htmlFor="description"><b>Description</b></label>
  
			  <input
				value={data.description}
				onChange={handleChange}
				autoComplete="off"
				name="description"
				type="text"
				className={`form-control box-prop`}
				id="description"
				placeholder="Describe your proposal."
			  />
			</div>

			<div className="form-group description-box">
			  <label htmlFor="description"><b>Budget</b></label>
  
			  <input
				value={data.budget}
				onChange={handleChange}
				autoComplete="off"
				name="budget"
				type="text"
				className={`form-control box-prop`}
				id="budget"
				placeholder="What is your budget?"
			  />
			</div>

			<div className="form-group mb-5">
		  	<label>
          	<b>Select a duration for this opportunity:</b>
          	<select name="duration" value={data.duration} onChange={handleChange}>
            	<option value="< 1 month">Less than 1 month</option>
            	<option value="1 to 3 months">1 to 3 months</option>
            	<option value="> 3 Months">More than 3 Months</option>
          	</select>
        	</label>
		  </div>

			<div className="form-group description-box">
			  <label htmlFor="description"><b>Start date</b></label>
  
			  <input
				value={data.start}
				onChange={handleChange}
				autoComplete="off"
				name="start"
				type="text"
				className={`form-control box-prop`}
				id="start"
				placeholder="Is there a start date defined for this opportunity?"
			  />
			</div>
  
			<button
			  type="submit"
			  className="btn btn-block btn-primary mb-3">
			  {/* disabled={this.state.loading}> */}
			  Submit Proposal
			</button>
		  </form>
		</div>
		  
		</div>
	  )
}

export default NewOpp