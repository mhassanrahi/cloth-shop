import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignAndUpPage = () => (
    <div className="row">
        <div className="col-lg-4 offset-lg-1 mb-2 col-md-10 offset-md-1">
           <SignIn />     
        </div>
        <div className="col-lg-5 offset-lg-1 col-md-10 offset-md-1">
        <SignUp />
        </div>
    </div>
)

export default SignAndUpPage;