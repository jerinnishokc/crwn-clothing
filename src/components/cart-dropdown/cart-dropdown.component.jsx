import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItems from '../cart-items/cart-items.component';
import { connect } from 'react-redux';
import { selectedCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => {
  console.log('Cart Dropdown rendered');
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </div>
      <CustomButton type="button">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
