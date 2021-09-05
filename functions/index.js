/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// Secrate kay from developer/APIs [stripe.com]
const stripe = require("stripe")(
    "sk_test_51JU4olSJX1KsV9pIdIY3TIhvFq3v3ivZtOvWuwPCYMHA5x3gAkTeSNdqE8kVbEE19VPFXkjr82LmobgxZrLo74vy00SV2e0wn4"
);

// APIs

// App config.
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hallow World"));

app.get("/payments/create", async (request, response) => {

    const total = request.query.total;

    console.log('Payment Rqst Recieved BOOM!!! for this amount', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of the curency
        currency: 'usd',
    });
    // OK & Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// Listen command
exports.api = functions.https.onRequest(app);

// example end Point
// http://localhost:5001/clone-with-react-9eb74/us-central1/api
