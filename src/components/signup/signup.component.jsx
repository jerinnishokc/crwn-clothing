import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormItem from '../form-item/form-item.component';
import './signup.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    //create document
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password's don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log('successfully signed up', user);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signUp">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormItem
            handleChange={this.handleChange}
            name="displayName"
            value={this.state.displayName}
            type="text"
            label="display name"
            required
          />
          <FormItem
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            label="email"
            required
          />
          <FormItem
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            label="password"
            required
          />
          <FormItem
            handleChange={this.handleChange}
            name="confirmPassword"
            value={this.state.confirmPassword}
            type="password"
            label="confirm password"
            required
          />
          <div className="button-grp">
            <CustomButton type="submit">REGISTER</CustomButton>
            <CustomButton
              onClick={() =>
                this.setState({
                  displayName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                })
              }
            >
              CLEAR
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
