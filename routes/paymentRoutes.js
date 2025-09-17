import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const paymentRoutes = express.Router();
import { checkToken } from "../security/security.js";
import { getUserPurchases, addPurchase, getUser, updateUser } from "../database/database.js"; // Import the database module



const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
const jwtSecret = process.env.JWT_SECRET;


import stripe from 'stripe';
const stripeClient = stripe(STRIPE_SECRET_KEY);

paymentRoutes.post('/intent', async (req, res) => {
  //console.log("In intent");
  //console.log("amt: " + req.body.amount);
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkToken(jwtToken)) {
      return res.status(401).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check

  try {
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    //console.log(paymentIntent);
    return res.json( paymentIntent );
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});

paymentRoutes.post('/createOrder', async (req, res) => {
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkToken(jwtToken)) {
      return res.status(401).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  try {
    // lets get the token and the user information
    const decodedPayload = jwt.verify(jwtToken, jwtSecret);
    const userId = decodedPayload.userId;
    // add the book to the user
    let user = await getUser(userId);
    let purchases = user.purchases;
    user.purchases.push(req.body.id);
    await updateUser(user);
    
    // create a purchases entry
    await addPurchase( userId, req.body.id, req.body.bookTitle, req.body.code, req.body.bookPrice);
    return res.json({
      message:"success"
    });
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});

/*
paymentRoutes.post('/applyDiscount', async (req, res) => {
  console.log("In Apply Discount");
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkToken(jwtToken)) {
      return res.status(401).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  console.log(req);
  try {
    console.log("Passed the security check");
    console.log("Ready to create order data");
    return res.json({
      message:"success"
    } );
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});
*/