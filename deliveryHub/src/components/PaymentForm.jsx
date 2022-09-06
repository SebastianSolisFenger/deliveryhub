import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

const PaymentForm = () => {
  return (
    <form className="md:-2/3 md:mx-auto px-2 pt-1" id="payment-form">
      <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">
        Please enter your card details
      </label>
      <div className="my-4">
        <CardElement id="card-element" />
      </div>
    </form>
  );
};

export default PaymentForm;
