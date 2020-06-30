import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectedCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} checkoutItem={item} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp:06/20 - CVV
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
