import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { login } from '../services/B4BService';
import './Login.css'

const validations = {
  email: v => v.length,
  password: v => v.length
};

const Login = () => {
  const [state, setState] = useState({
    data: {
      email: "",
      password: ""
    },
    error: {
      email: true,
      password: true
    },
    touch: {},
  })

  const [loginError, setLoginError] = useState(null)

  const authContext = useAuthContext()

  const { data, error, touch } = state

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await login(data)
      authContext.login(user)
    } catch(err) {
      setLoginError(err.response?.data?.message)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const validationFn = validations[name];
    const isValid = validationFn(value);

    setState(prev => {
      return {
        ...prev,
        data: {
          ...prev.data,
          [name]: value,
        },
        error: {
        ...prev.error,
        [name]: !isValid,
        }
      }
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setState(prev => {
      return {
        ...prev,
        touch: {
          ...touch,
          [name]: true
        }
      }
    })
  }

  const isError = Object.values(error).some(err => err)

  return (
    <div className="login">
      <img src="../b4b-logo.png" alt="logo" />
      <div className="col">
      
      {loginError && <div className="alert alert-danger">{loginError}</div>}
        <div className="card text-center login-card">
          <div className="card-header title-login">
            <h3><b>Log In</b></h3>
          </div>
          <div className="card-body">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email</label>

            <input
              value={data.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              type="text"
              className={`form-control ${touch.email && error.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
            />

            <div className="invalid-feedback">email is wrong</div>
          </div>

          <div className="form-group">
            <label htmlFor="tagline">password</label>

            <input
              name="password"
              value={data.password}
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              className={`form-control ${touch.password && error.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
            />

            <div className="invalid-feedback">error</div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isError}
          >
            Log In
          </button>
        </form>
        <div className="signup">
          <Link to="/signup">Don't have an account? Sign up here!</Link>
        </div>
        </div>
        
        </div>
        
      </div>
    </div>

    
  );
}

export default Login