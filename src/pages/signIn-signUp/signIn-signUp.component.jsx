import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signIn-signUp.styles.scss';

const SignInSignUp = () => (
  <div className="signIn-signUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
