import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignAndUpPage = () => (
    <div className="row">
        <div className="col-md-4 offset-md-1 mb-2">
           <SignIn />     
        </div>
        <div className="col-md-4 offset-md-2">
        <SignUp />
        </div>
    </div>
)

export default SignAndUpPage;