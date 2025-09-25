import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const authenticationRoutes = express.Router();
import { OAuth2Client } from 'google-auth-library';

import { checkTokenUserMatch, checkIfTokenExpiredOrInvalid } from "../security/security.js";
import { addOrUpdateUser, getUserLanguage, getUserPurchases, getUserSubscriptions } from "../database/database.js"; // Import the database module

const GOOGLE_WEB_CLIENT_ID  = process.env.GOOGLE_WEB_CLIENT_ID;
const GOOGLE_ANDROID_CLIENT_ID = process.env.GOOGLE_ANDROID_CLIENT_ID;
const GOOGLE_IOS_CLIENT_ID = process.env.GOOGLE_IOS_CLIENT_ID;
const jwtSecret = process.env.JWT_SECRET;



authenticationRoutes.post('/googlelogin', (req, res) => {
  // retrieve the token
  const token = req.body.token;
  const user = req.body.user;
  
  // validate the token with google.
  const client = new OAuth2Client(GOOGLE_WEB_CLIENT_ID);
  const verify = async () => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [ GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID ], 
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    
    if (payload.sub !== user.id) {
      return res.json(
        JSON.stringify({
          "message": "Error: Token user ID does not match provided user ID",
          "jwtToken": "",
          "refreshToken": "",
        }));
    }
    // Add or update the user.  Same thing here.
    //user.purchases=user.purchases || ['gospel-of-nicodemus-en', 'the-nephite-record-en', 'the-sacred-tree-en']
    await addOrUpdateUser(user);
    let language = await getUserLanguage(user.id);
    let purchases = await getUserPurchases(user.id);
    if(!purchases) {
      // we are giving them a book for free.
      purchases = ["the-sacred-tree-en"];
      user.purchases = purchases;
      await addOrUpdateUser(user);
    }
    let subscriptions = await getUserSubscriptions(user.id);
    if(!subscriptions) {
      // should be no subscriptions by default.
      subscriptions = [];
      user.subscriptions = subscriptions;
      await addOrUpdateUser(user);
    }

    //console.log(purchases);
    // generate the jwt token.
    let jwtToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    let refreshToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '7d' });
    //no need to store in database.
    //addToken(user.id, jwtToken);
    return res.json(
    JSON.stringify({
        "message": "Success",
        "language": language,
        "jwtToken": jwtToken,
        "refreshToken": refreshToken,
    }))

  }
  verify().catch((error) => {
    console.log('Error verifying token:', error);
    return res.json(
      JSON.stringify({
        "message": error,
        "jwtToken": "",
        "refreshToken": "",
      })
    );
  });
});

authenticationRoutes.post('/refreshJwtToken', (req, res) => {
  console.log("in refreshJwtToken");

  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }

  const jwtToken = authHeader.split(' ')[1];
  console.log("This is the jwtToken");
  console.log(jwtToken);
  console.log(checkIfTokenExpiredOrInvalid(jwtToken, jwtSecret));
  if (checkIfTokenExpiredOrInvalid(jwtToken, jwtSecret)) {
    console.log("Token Expired");
    // The token is expired.  Lets check if the authToken is expired.
    let refreshToken = req.body.refreshToken;
    let userId = req.body.userId;
    console.log("This is the refreshToken");
    console.log(refreshToken);
    if(checkIfTokenExpiredOrInvalid(refreshToken, jwtSecret)) {
      // if expired return an error message.
      console.log("expired");
      return res.status(401).send('Unauthorized: RefreshToken is expired.');
    } else {
      const isMatch = checkTokenUserMatch(refreshToken, userId);
      console.log("this is isMatch");
      console.log(isMatch);
      if(isMatch) {
        console.log("Create the new one now.");
        console.log("userId " + userId);
        console.log("jwtSecret " + jwtSecret);
        let newJwtToken = jwt.sign({ userId: userId }, jwtSecret, { expiresIn: '1h' });
        console.log("oldJwtToken:" + jwtToken);
        console.log("newJwtToken:" + newJwtToken);
        return res.json(
            JSON.stringify({
                "message": "update-jwt-token",
                "jwtToken": newJwtToken,
            }));
      }
    }
  }
  else {
    return res.json(
      JSON.stringify({
        "message": "valid-token",
      }));
  }
});
