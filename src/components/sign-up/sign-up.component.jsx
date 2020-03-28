import React from 'react';

const SignUp = () => {
    return(
        
        <div className="card">
        
        <h5 className="card-header indigo white-text text-center py-4">
          <strong>Sign Up</strong>
        </h5>
        <div className="card-body px-lg-5">
          <form className="text-center" action="#!">

            <div className="md-form">
              <input type="text" id="name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
        
            <div className="md-form">
              <input type="email" id="email" className="form-control" />
              <label htmlFor="email">E-mail</label>
            </div>
        
            <div className="md-form">
              <input type="password" id="password" className="form-control" />
              <label htmlFor="password">Password</label>
            </div>

            <div className="md-form">
              <input type="password" id="cPassword" className="form-control" />
              <label htmlFor="cPassword">Confirm Password</label>
            </div>
            <button className="btn btn-outline-indigo btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign Up</button>
            
          </form>
        
        
        </div>
        
        </div>
        
            );
}

export default SignUp;