import 'dotenv/config'; 
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;



export const checkToken = (jwtTokenValue) => {
    const decodedPayload = jwt.verify(jwtTokenValue, jwtSecret);
    let expiration_timestamp = decodedPayload.exp;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const isExpired = decodedPayload.exp < currentTimeInSeconds;
    
    return !isExpired;
}
