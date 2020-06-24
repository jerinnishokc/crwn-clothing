import React from 'react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown, totalItems }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartDropdown()}>
      <Cart className="shopping-icon" />
      <div className="item-count">{totalItems}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = ({ cart: { totalItems } }) => {
  console.log('Cart-icon called!!!');
  return {
    totalItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
