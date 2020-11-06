import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
	return (
		<div className="boxes">
			
			<div className="box">
			<Link to={{pathame:`/business-list`, state:{sector: "AI/ML"}}}>AI/ML</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>Blockchain</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>Cybersecurity</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>Digital Marketing</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>Industry 4.0 & Automation</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>IoT</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>RPA</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>Software Development</Link>
			</div>
			<div className="box">
			<Link className="link" to=''>Telecoms</Link>
			</div>
			{/* <div className="box">
			<Link to=''>QA & Testing</Link>
			</div> */}
		</div>
	)
}

export default Services