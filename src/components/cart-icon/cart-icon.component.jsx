import React from 'react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartDropdown()}>
      <Cart className="shopping-icon" />
      <div className="item-count">0</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
