import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { getCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = ({ history, currentUser, hidden }) => {
  console.log('Header component: ', currentUser);
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo onClick={() => history.push('/')} />
      </LogoContainer>
      {/*<Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>*/}
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(withRouter(Header));
