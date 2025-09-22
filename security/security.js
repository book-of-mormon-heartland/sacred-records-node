import 'dotenv/config'; 
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';


const GOOGLE_WEB_CLIENT_ID  = process.env.GOOGLE_WEB_CLIENT_ID;
const GOOGLE_ANDROID_CLIENT_ID = process.env.GOOGLE_ANDROID_CLIENT_ID;
const GOOGLE_IOS_CLIENT_ID = process.env.GOOGLE_IOS_CLIENT_ID;
const jwtSecret = process.env.JWT_SECRET;



export const checkToken = (jwtTokenValue) => {
    const decodedPayload = jwt.verify(jwtTokenValue, jwtSecret);
    let expiration_timestamp = decodedPayload.exp;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const isExpired = decodedPayload.exp < currentTimeInSeconds;
    
    return !isExpired;
}


export const checkIfTokenExpired = (jwtTokenValue) => {
    
    try {
        const decodedPayload = jwt.verify(jwtTokenValue, jwtSecret);
        let expiration_timestamp = decodedPayload.exp;
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        //const isExpired = decodedPayload.exp < currentTimeInSeconds;
        return decodedPayload.exp < currentTimeInSeconds;
    } catch (err) {
      // an error gets thrown if it is expired. 
       return true;
    }
}


export const checkTokenUserMatch = (refreshToken, userId) => {
    try {
        const decodedPayload = jwt.verify(refreshToken, jwtSecret);
        let expiration_timestamp = decodedPayload.exp;
        console.log("decoded payload userId")
        console.log(decodedPayload.userId);
        return decodedPayload.userId === userId;
    } catch (err) {
      // an error gets thrown if it is expired. 
      console.log("Error Thrown for refreshToken");
      return false;
    }
};

