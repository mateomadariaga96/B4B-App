import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
	return (
		<div className="boxes">
			
			<div className="box">
			<img className="box-image" src="../inteligencia-artificial.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "AI/ML"}}}>AI/ML</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../bitcoin.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Blockchain"}}}>Blockchain</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../candado.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Cybersecurity"}}}>Cybersecurity</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../megafono.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Digital Marketing"}}}>Digital Marketing</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../plataforma.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Industry 4.0 & Automation"}}}>Industry 4.0</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../red-mundial.png" />
			<br></br>
			<Link className="link" to={{pathname:"/business-list", state:{sector: "IoT"}}}>IoT</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../robot.png" />
			<br></br>
			<Link className="link" to={{pathname:"/business-list", state:{sector: "RPA"}}}>RPA</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../algoritmo.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Software Development"}}}>Software Development</Link>
			</div>
			<div className="box">
			<img className="box-image" src="../telecomunicaciones.png" />
			<Link className="link" to={{pathname:"/business-list", state:{sector: "Telecoms"}}}>Telecoms</Link>
			</div>
			{/* <div className="box">
			<Link to=''>QA & Testing</Link>
			</div> */}
		</div>
	)
}

export default Services