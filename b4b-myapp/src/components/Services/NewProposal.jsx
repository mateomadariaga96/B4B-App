import React, { useState } from 'react'
import B4BService from '../../services/B4BService'
import { useAuthContext } from '../../contexts/AuthContext'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './NewProposal.css'

const Proposal = ({ location }) => {
  const loc = useHistory()
  const {user} = useAuthContext()
  const [data, setData] = useState({
    title: '',
    description: '',
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
      opportunity: location.state.opportunity.id,
      business: user.id,
    }

      B4BService.createProposal(newData)
        .then((response) => {
          console.log("newData", response);
          loc.replace("/home")
        })
        .catch(() => {
          //setState({ error: true, loading: false })
        })
  }




    /* if (state.success) {
      return <Redirect to="/home"/>
    } */

    return (
      <div className="New-proposal">
	  	<h3>Create a proposal</h3>
        <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>

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
            <label htmlFor="description">Description</label>

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

export default Proposal