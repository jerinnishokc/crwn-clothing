import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GzdRuLPgIPOIcWQwAvbs4SoowX84ZX0DDxpQKmYMWx44UMLnkKYhoxG1paS4KQFsS21vT7FlfwkTxGX3iYpZ2J500veJleOvz';

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
