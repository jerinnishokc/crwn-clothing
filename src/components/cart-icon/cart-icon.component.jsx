import React from 'react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartDropdown, totalItems }) => {
  console.log('Cart-icon rendered!!!');
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

const mapStateToProps = createStructuredSelector({
    totalItems: selectCartItemsCount,
    //totalItems: state.cart.totalItems,
    // totalItems: state.cart.cartItems.reduce(
    //   (accumulatedQuantity, cartItems) =>
    //     accumulatedQuantity + cartItems.quantity,
    //   0
    // ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
