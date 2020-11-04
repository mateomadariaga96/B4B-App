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
			<Link to=''>Blockchain</Link>
			</div>
			<div className="box">
			<Link to=''>Cybersecurity</Link>
			</div>
			<div className="box">
			<Link to=''>Digital Marketing</Link>
			</div>
			<div className="box">
			<Link to=''>Industry 4.0 & Automation</Link>
			</div>
			<div className="box">
			<Link to=''>IoT</Link>
			</div>
			<div className="box">
			<Link to=''>RPA</Link>
			</div>
			<div className="box">
			<Link to=''>Software Development</Link>
			</div>
			<div className="box">
			<Link to=''>Telecoms</Link>
			</div>
			<div className="box">
			<Link to=''>QA & Testing</Link>
			</div>
		</div>
	)
}

export default Services