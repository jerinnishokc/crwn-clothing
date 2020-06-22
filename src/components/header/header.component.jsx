import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';

const Header = ({ history, currentUser }) => {
  console.log('Header component: ', currentUser);
  return (
    <div className="header">
      <div className="logo-container">
        <Logo onClick={() => history.push('/')} />
      </div>
      {/*<Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>*/}
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signIn" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps- ', state);
  return {
    currentUser: state.user.currentUser,
  };
};
export default connect(mapStateToProps)(withRouter(Header));
