import React from 'react';
import FormItem from '../../components/form-item/form-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './signin.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    await auth.signInWithEmailAndPassword(email, password);

    this.setState({ email: '', password: '' });
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in by entering your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormItem
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
          />

          <FormItem
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">SignIn</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
