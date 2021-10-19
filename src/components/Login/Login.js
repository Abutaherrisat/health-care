import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
  const { signInUsingGoogle, handleEmailChange, handlePassWordChange, handleRegistration, isLogin, error, toggleLogIn } = useAuth()
  
  
  return (

    <div className='d-flex justify-content-center'>
      <div className="login-container w-75 mt-10">
        <form onSubmit={handleRegistration}>
          <h3 className="text-primary text-center">Please {isLogin ? "login" : 'Register'}</h3>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input onBlur={handleEmailChange} type="email" className="form-control" required id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input onBlur={handlePassWordChange} type="password" required className="form-control" id="inputPassword3" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input onChange={toggleLogIn} className="form-check-input " type="checkbox" id="gridCheck1" />
                <label className="form-check-label" for="gridCheck1">
                  Already Registerd?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 text-danger">
            {error}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
          </div>
          <div>
            <div className='text-center'>
              <Link to="/register">----New User?----</Link>
            </div>
            <div className='google-signin'>
              <button onClick={signInUsingGoogle} className="btn btn-success">Sign In With Google</button>
            </div>
          </div>
        </form>


      </div>
    </div>
  );
};

export default Login;