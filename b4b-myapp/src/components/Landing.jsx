import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing () {

	return (
		<div className="landing">
			<img className="back" src='../back-landing.jpg' />

			<div className="landing-body">
			<img className="logo-landing" src='../b4b-logo.png' />
				<div className="landing-title">
					<b><p>Try B4B Tech, a ZERO cost business consulting platform.</p></b>
				</div>
				<div>
					<p>The new business model that is going to change the market soon. Forget about high consulting costs, with no middleman involved in the negotiation, you are free to choose the partner which best fits for your solution. Create new business opportunities and make proposals to other companies.</p>
				</div>
				<div className="landing-btn">
					<div>
						<Link className="btn btn-primary" to="/signup">Sign up for free</Link>
					</div>
					<div>
						<Link className="btn btn-primary" to="/login">Go to Login</Link>
					</div>
				</div>
				
			</div>
		</div>
	)

}

export default Landing