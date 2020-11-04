import React from 'react'
import { Link } from 'react-router-dom'
import B4BService from '../services/B4BService'

const ProposalBtn = ({proposals, opportunity}) => (
		<div className="proposal">
		<span className="text-muted">proposals: {proposals && proposals.length} | </span>
		<Link to={{pathname:`/new-proposal`, state:{opportunity}}} >New Proposal</Link>
	  	</div>
    )


export default ProposalBtn