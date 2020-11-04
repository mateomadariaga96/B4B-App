import React from 'react'
import B4BService from '../../services/B4BService'
import { Link, Redirect } from 'react-router-dom'

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
      B4BService.createProposal(formData)
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
      <div className="Register">
	  	<h3>Register your business here!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              value={this.state.data.name}
              onChange={this.handleChange}
              autoComplete="off"
              name="name"
              type="text"
              className={`form-control ${errorClassName}`}
              id="name"
              placeholder="Enter business name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              value={this.state.data.email}
              onChange={this.handleChange}
              autoComplete="off"
              name="email"
              type="email"
              className={`form-control ${errorClassName}`}
              id="email"
              placeholder="Enter company email"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password">Password</label>

            <input
              value={this.state.data.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className={`form-control ${errorClassName}`}
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Logo</label>

            <input
              onChange={this.handleChange}
              name="logo"
              type="file"
              className={`form-control ${errorClassName}`}
              id="logo"
            />
          </div>

		  <div className="form-group mb-5">
            <label htmlFor="password">Location</label>

            <input
              value={this.state.data.location}
              onChange={this.handleChange}
              name="location"
              type="text"
              className={`form-control ${errorClassName}`}
              id="location"
              placeholder="Where is your company from?"
            />
          </div>

		  <div className="form-group mb-5">
		  	<label>
          	Pick your sector:
          	<select value={this.state.data.sector} onChange={this.handleChange}>
            	<option value="aiml">AI/ML</option>
            	<option value="blockchain">Blockchain</option>
            	<option value="cybersecurity">Cybersecurity</option>
            	<option value="digital">Digital Marketing</option>
            	<option value="industry">Industry 4.0 & Automation</option>
            	<option value="iot">IoT</option>
            	<option value="rpa">RPA</option>
            	<option value="software">Software Development</option>
            	<option value="telecoms">Telecoms</option>
            	<option value="qa">QA & Testing</option>
          	</select>
        	</label>
		  </div>

		  <div className="form-group mb-5">
		  	<label>
          	What's your company's size?:
          	<select value={this.state.data.size} onChange={this.handleChange}>
            	<option value="small">0 to 10 employees</option>
            	<option value="medium">10 to 50 employees</option>
            	<option value="large">50 to 250 employees</option>
            	<option value="xlarge">+250 employees</option>
          	</select>
        	</label>
		  </div>

		  <div className="form-group mb-5">
            <label htmlFor="password">Description</label>

            <input
              value={this.state.data.description}
              onChange={this.handleChange}
              name="description"
              type="text"
              className={`form-control ${errorClassName}`}
              id="description"
              placeholder="Tell us about your company"
            />
          </div>

		  <div className="form-group mb-5">
            <label htmlFor="password">Web URL</label>

            <input
              value={this.state.data.web}
              onChange={this.handleChange}
              name="web"
              type="text"
              className={`form-control ${errorClassName}`}
              id="web"
              placeholder="Insert web URL"
            />
          </div>

		  <div className="form-group mb-5">
            <label htmlFor="password">LinkedIn Page</label>

            <input
              value={this.state.data.linkedin}
              onChange={this.handleChange}
              name="linkedin"
              type="text"
              className={`form-control ${errorClassName}`}
              id="linkedin"
              placeholder="Insert LinkedIn URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}>
            Sign up
          </button>
        </form>
      </div>
    )
  }
}

export default Register