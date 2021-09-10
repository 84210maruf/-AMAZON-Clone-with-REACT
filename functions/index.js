/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// Secrate kay from developer/APIs [stripe.com]
const stripe = require("stripe")(
  "sk_test_51JY2aCIoLD5rwfnZSWQ9a48HOsMHhF54kk1wyL7xedWCYwSdK6wtQ7gaa4aUAGLJQp0WBHKCEQtgO8eKaSyinwut00eKFqchxY"
);

// APIs

// App config.
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("This is the BACKEND & Insider Express.js ....CLOUD FUNCTION......"));

app.post("/payments/create", async (request, response) => {

  const total = Math.round(request.query.total);

  console.log("Payment Rqst Recieved BOOM!!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK & Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example end Point
// http://localhost:5001/clone-with-react-9eb74/us-central1/api
