const express = require('express');
const bodyParser = require('body-parser');

// which domiains can make calls to the server? I guess that what CORS is for
// for now we are gonna configure it so it allows calls from our localhost
const cors = require('cors');

const db = require('./db');

const app = express();
const ProductRouter = require('./routes/productRouter.jsx');

// access to the secret env KEYS
const env = require('dotenv').config({ path: '../.env' });

//import stripe module
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var corsOptions = {
  origin: 'http://localhost:3000',
};

const calculateOrderAmount = (orderItems) => {
  const initialValue = 0;
  const itemsPrice = orderItems.reduce((previousValue, currentValue) => {
    return (
      previousValue + currentValue.price * currentValue.amount, initialValue
    );
  });
  return itemsPrice * 100;
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
app.post('/webhook', async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // we can retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'payment_intent.succeeded') {
    // Funds have been captured
    // Fulfill any orders, e-mail receipts, etc
    // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
    console.log('💰 Payment captured!');
  } else if (eventType === 'payment_intent.payment_failed') {
    console.log('❌ Payment failed.');
  }
  res.sendStatus(200);
});

db.on('error', console.error.bind(console, 'Mongodb connection error:'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Food Order!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/', ProductRouter);

// Create a PaymentIntent with the order amount and currency

app.post('/create-payment-intent', async (req, res) => {
  try {
    // const { orderItems, shippingAddress, userId } = req.body;

    // const totalPrice = calculateOrderAmount(orderItems);

    // TEMP
    const totalPrice = 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: 'usd',
    });

    // TODO: CREATE ORDER AND STORE IT IN THE DATABASE

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
    console.log(err);
  }
});
