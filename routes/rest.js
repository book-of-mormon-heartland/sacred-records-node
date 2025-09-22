
import express from 'express';
//import { text } from 'body-parser';
import { OAuth2Client } from 'google-auth-library';
import 'dotenv/config'; 
import jwt from 'jsonwebtoken';
import { db, addOrUpdateUser, getUserLanguage, saveLanguageToUserProfile, getUserPurchases } from "../database/database.js"; // Import the database module
import { checkToken } from "../security/security.js"; // Import the database module

//const GOOGLE_WEB_CLIENT_ID  = process.env.GOOGLE_WEB_CLIENT_ID;
//const GOOGLE_ANDROID_CLIENT_ID = process.env.GOOGLE_ANDROID_CLIENT_ID;
//const GOOGLE_IOS_CLIENT_ID = process.env.GOOGLE_IOS_CLIENT_ID;
const jwtSecret = process.env.JWT_SECRET;

export const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Rest home page");
});


router.post('/POST/setLanguage', (req, res) => {
    
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
    //curl -X POST -H "Content-Type: application/json" -d '{"language": "en"}' http://192.168.1.171:3000/rest/POST/setLanguage
    
    const decodedPayload = jwt.verify(jwtToken, jwtSecret);
    const selectedLanguage = req.body.language;
    const userId = decodedPayload.userId;
    // now save the language to the user profile.
    saveLanguageToUserProfile(userId, selectedLanguage);
    
    return res.status(200).json({
        message: "Success",
    });
});

