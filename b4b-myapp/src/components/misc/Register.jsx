import React from 'react'
import B4BService from '../../services/B4BService'
import { Link, Redirect } from 'react-router-dom'
import './Register.css'

class Register extends React.Component {
  state = {
    data: {
      name: '',
      email: '',
      password: '',
	    logo: null,
	    name: '',
	    location: '',
	    size: '',
	    sector: '',
	    description: '',
	    web: '',
	    linkedin: '',

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

    this.setState({ loading: true, error: false }, () => {
      B4BService.signup(data)
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
      return <Redirect to="/login"/>
    }

    return (
      <div className="Register">
        <div className="card text-center login-card">
          <div className="card-header title-login">
            <h3><b>Log In</b></h3>
          </div>
          <div className="card-body register-body">
          <img className="register-logo" src='../b4b-logo.png' />
          <form onSubmit={this.handleSubmit}>
          <div className="form-group mb-5">
            <label htmlFor="name"><b>Name</b></label>

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

          <div className="form-group mb-5">
            <label htmlFor="email"><b>Email</b></label>

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
            <label htmlFor="password"><b>Password</b></label>

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

          <div className="form-group mb-5">
            <label htmlFor="avatar"><b>Logo</b></label>

            <input
              onChange={this.handleChange}
              name="logo"
              type="file"
              className={`form-control ${errorClassName}`}
              id="logo"
            />
          </div>

		      <div className="form-group mb-5">
            <label htmlFor="password"><b>Location</b></label>

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
          <b>Pick your sector: </b>
          	<select name="sector" value={this.state.data.sector} onChange={this.handleChange}>
            	<option value="AI/ML">AI/ML</option>
            	<option value="Blockchain">Blockchain</option>
            	<option value="Cybersecurity">Cybersecurity</option>
            	<option value="Digital Marketing">Digital Marketing</option>
            	<option value="Industry 4.0 & Automation">Industry 4.0 & Automation</option>
            	<option value="IoT">IoT</option>
            	<option value="RPA">RPA</option>
            	<option value="Software Development">Software Development</option>
            	<option value="Telecoms">Telecoms</option>
            	<option value="QA & Testing">QA & Testing</option>
          	</select>
        	  </label>
		        </div>

		      <div className="form-group mb-5">
		  	  <label>
          	<b>What's your company's size?: </b>
          	<select name="size" value={this.state.data.size} onChange={this.handleChange}>
            	<option value="0 to 10 employees">0 to 10 employees</option>
            	<option value="10 to 50 employees">10 to 50 employees</option>
            	<option value="50 to 250 employees">50 to 250 employees</option>
            	<option value="+250 employees">+250 employees</option>
          	</select>
        	</label>
		      </div>

		      <div className="form-group mb-5">
            <label htmlFor="password"><b>Description</b></label>

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
            <label htmlFor="password"><b>Web URL</b></label>

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
            <label htmlFor="password"><b>LinkedIn Page</b></label>

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
            Sign up to B4B - Tech
          </button>
        </form>
        </div>
      </div>
      </div>
    )
  }
}

export default Register