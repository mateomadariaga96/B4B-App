  
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3010',
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login')
    }

    return Promise.reject(error)
  }
)

export const login = ({ email, password }) => http.post('/login', { email, password })

export const logout = () => http.post('/logout')

export const signup = (data) => http.post('/business', data)

const listBusinesses = (options) => {
	const config = {
		params: {...options}
	  };
	return http.get('/businesses', config) //duda con filtros
}

//const listBusinessesBySector = (sector) => http.get(`/businesses?sector=${sector}`) //duda con filtros

//const listBusinessesByType = (type) => http.get(`/businesses?type=${type}`, {}) //duda con filtros

const profile = (bussId) => http.get(`/business/${bussId}`, {})

const createContact = (data, bussId) => http.post(`/business/${bussId}/contact`, data)

const deleteBusiness = (bussId) => http.delete(`/business/${bussId}/delete`)

const updateBusiness = (bussId) => http.put(`/business/${bussId}/update`)

export const getOpportunities = () => http.get('/opportunities')

export const getProducts = () => http.get('/products')

export const likeOpportunity = (oppId) => http.get(`/opportunity/like/${oppId}`, {})

export const likeProduct = (productId) => http.get(`/product/like/${productId}`, {})

export default {
  //login,
  //signup,
  listBusinesses,
  logout,
  //listBusinessesBySector,
  //listBusinessesByType,
  profile,
  createContact,
  deleteBusiness,
  updateBusiness,
  getOpportunities,
  getProducts,
  likeOpportunity
}

 const option = {
	sector: String,
	type: String,
}
