import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectedCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
// import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
  GenericSpanContainer,
  StripeButtonContainer,
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <GenericSpanContainer>Product</GenericSpanContainer>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <GenericSpanContainer>Description</GenericSpanContainer>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <GenericSpanContainer>Quantity</GenericSpanContainer>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <GenericSpanContainer>Price</GenericSpanContainer>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <GenericSpanContainer>Remove</GenericSpanContainer>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} checkoutItem={item} />
    ))}
    <TotalContainer>
      <GenericSpanContainer>TOTAL: ${total}</GenericSpanContainer>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp:06/20 - CVV
    </TestWarningContainer>
    <StripeButtonContainer price={total}></StripeButtonContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
