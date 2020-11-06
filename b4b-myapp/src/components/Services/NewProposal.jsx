import React from 'react'
import B4BService from '../../services/B4BService'
import { Link, Redirect } from 'react-router-dom'
import './NewProposal.css'

class Register extends React.Component {
  state = {
    data: {
    title: '',
	  description: '',
	  status: '',
	  opportunity: '', //duda
	  business: '' //duda

    },
    error: false,
    loading: false,
    success: false
  }

  handleChange = (event) => {
    const { name, value, files } = event.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: files ? files[0] : value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { data } = this.state

    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('status', data.status)
    formData.append('opportunity', data.opportunity)
    formData.append('business', data.business)

    this.setState({ loading: true, error: false }, () => {
      B4BService.createProposal(data)
        .then(() => {
          this.setState({ success: true })
        })
        .catch(() => {
          this.setState({ error: true, loading: false })
        })
    })
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if (this.state.success) {
      return <Redirect to="/home"/>
    }

    return (
      <div className="New-proposal">
	  	<h3>Create a proposal</h3>
        <div className="form-box">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>

            <input
              value={this.state.data.title}
              onChange={this.handleChange}
              autoComplete="off"
              name="title"
              type="text"
              className={`form-control ${errorClassName}`}
              id="title"
              placeholder="Short title describing proposal"
            />
          </div>

          <div className="form-group description-box">
            <label htmlFor="description">Description</label>

            <input
              value={this.state.data.description}
              onChange={this.handleChange}
              autoComplete="off"
              name="description"
              type="text"
              className={`form-control ${errorClassName} box-prop`}
              id="description"
              placeholder="Describe your proposal."
            />
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}>
            Submit Proposal
          </button>
        </form>
        </div>
        
      </div>
    )
  }
}

export default Register