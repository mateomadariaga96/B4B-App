import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
	return (
		<div className="boxes">
			
			<div className="box">
			<Link to={{pathname:"/business-list", state:{sector: "AI/ML"}}}>AI/ML</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Blockchain"}}}>Blockchain</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Cybersecurity"}}}>Cybersecurity</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Digital Marketing"}}}>Digital Marketing</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Industry 4.0 & Automation"}}}>Industry 4.0 & Automation</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "IoT"}}}>IoT</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "RPA"}}}>RPA</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Software Development"}}}>Software Development</Link>
			</div>
			<div className="box">
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Telecoms"}}}>Telecoms</Link>
			</div>
			{/* <div className="box">
			<Link to=''>QA & Testing</Link>
			</div> */}
		</div>
	)
}

export default Services