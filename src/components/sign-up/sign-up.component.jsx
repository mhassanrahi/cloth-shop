import React from 'react';
import useForm from '../custom-hook/useForm';
import validate from '../custom-hook/validateSignUp';
import Button from '../button/button.component';

const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '',
  cPassword: ''
}

const FORM = 'sign-up';

const SignUp = () => {
  const {handleChange, handleSubmit, userData, errors} = useForm(INITIAL_STATE, validate, FORM);
  const {displayName, email, password, cPassword} = userData;


  return(
        
        <div className="card">
        
        <h5 className="card-header indigo white-text text-center py-4">
          <strong>Sign Up</strong>
        </h5>
        <div className="card-body px-lg-5">
          <form className="text-center" noValidate onSubmit={handleSubmit}>

            <div className="md-form">
              <input
                onChange={handleChange}
                type="text"
                name="displayName"
                value={displayName}
                className={`form-control ${errors.displayName && "border-danger"}`}
                placeholder='Name'
              />
              {errors.displayName && <p className="font-small text-danger">{errors.displayName}</p>}
            </div>
        
            <div className="md-form">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className={`form-control ${errors.email && "border-danger"}`}
                value={email}
                placeholder='Email address'
              />
              {errors.email && <p className="font-small text-danger">{errors.email}</p>}
            </div>
        
            <div className="md-form">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className={`form-control ${errors.password && "border-danger"}`}
                value={password}
                placeholder='Password'
              />
              {errors.password && <p className="font-small text-danger">{errors.password}</p>}
            </div>

            <div className="md-form">
              <input
                onChange={handleChange}
                type="password"
                name="cPassword"
                className={`form-control ${errors.cPassword && "border-danger"}`}
                value={cPassword}
                placeholder='Confirm Password'
                />
              {errors.cPassword && <p className="font-small text-danger">{errors.cPassword}</p>}
            </div>
            
            <Button type='submit' outline='indigo'>Sign Up</Button>
          </form>
        
        
        </div>
        
        </div>
        
            );
}

export default SignUp;