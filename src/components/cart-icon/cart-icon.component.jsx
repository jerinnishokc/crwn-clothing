import React from 'react';
// import { ReactComponent as Cart } from '../../assets/cart.svg';
// import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown, totalItems }) => {
  console.log('Cart-icon rendered!!!');
  return (
    <CartIconContainer onClick={() => toggleCartDropdown()}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCountContainer>{totalItems}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = createStructuredSelector({
  totalItems: selectCartItemsCount,
  //totalItems: state.cart.totalItems,
  // totalItems: state.cart.cartItems.reduce(
  //   (accumulatedQuantity, cartItems) =>
  //     accumulatedQuantity + cartItems.quantity,
  //   0
  // ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
