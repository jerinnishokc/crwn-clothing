import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
// import './signIn-signUp.styles.scss';
import { SignInSignUpPageContainer } from './signIn-signUp.styles';

const SignInSignUp = () => {
  console.log('------------------------------------------------');
  console.log('SignIn SignUp Page rendered!!!');
  console.log('------------------------------------------------');
  return (
    <SignInSignUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpPageContainer>
  );
};

export default SignInSignUp;
