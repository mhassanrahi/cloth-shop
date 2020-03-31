import React from 'react';
import {Link} from 'react-router-dom';

import './sign-in.style.css'

import Button from '../button/button.component';

import useForm from '../custom-hook/useForm';
import validate from '../custom-hook/validateLogin';

import {signInWithGoogle} from '../../firebase/firebase.utils';

const INITIAL_STATE = {
  email: '',
  password: ''
}
const SignIn = () => {

  const {handleChange, handleSubmit, userData, errors} = useForm(INITIAL_STATE, validate);
  const {email, password} = userData;
    return(
        
<div className="card">

<h5 className="card-header indigo white-text text-center pt-4">
  <strong>Sign in</strong>
</h5>
  <div className="card-body px-lg-5">
    <form className="text-center" noValidate onSubmit={handleSubmit}>

      <div className="md-form">
        <input type="email"
        name="email"
        className={`form-control ${errors.email && "border-danger"}`}
        placeholder="Email"
        value={email}
        onChange={handleChange}
        />
        {errors.email && <div className="font-small text-danger">{errors.email}</div>}
      </div>

      <div className="md-form">
        <input 
          type="password"
          name="password"
          className={`form-control ${errors.password && "border-danger"}`}
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <p className="font-small text-danger">{errors.password}</p>}
        <div className="d-flex justify-content-end font-small">
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </div>
      
      <Button type='submit' outline='indigo'>Sign in</Button>

      <p>or sign in with:</p>
      <Link type="button" className="btn-floating btn-fb btn-sm">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link type="button" onClick={signInWithGoogle} className="btn-floating btn-tw btn-sm">
        <i className="fab fa-google"></i>
      </Link>
      <Link type="button" className="btn-floating btn-li btn-sm">
        <i className="fab fa-linkedin-in"></i>
      </Link>
      <Link type="button" className="btn-floating btn-git btn-sm">
        <i className="fab fa-github"></i>
      </Link>
      
    </form>
  </div>
</div>

    );
}

export default SignIn;