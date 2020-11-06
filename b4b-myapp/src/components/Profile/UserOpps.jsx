import React from 'react'
import LikeBtn from '../LikeBtn'
import { useAuthContext } from '../../contexts/AuthContext'

const UserOpportunity = ({ opportunity }) => {
	const authContext = useAuthContext()
	const { title, description, duration, busget, start, likes, proposals } = opportunity


}