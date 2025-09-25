import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const subscriptionRoutes = express.Router();
import { checkToken, checkIfTokenExpiredOrInvalid } from "../security/security.js";
import { db, getUserSubscriptions } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;


subscriptionRoutes.get('/getSubscriptions', async (req, res) => {
  console.log("in getSubscriptions")
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (checkIfTokenExpiredOrInvalid(jwtToken, jwtSecret)) {
      return res.status(401).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let userSubscriptions = await getUserSubscriptions(userId);

  /*
  let bookId = req.body.bookId;
  let book = await getBook(bookId);
  let toRemove = userId+"-"+req.body.bookId;
  const removeMessage = await removePreviousBookmark( toRemove );
  const addMessage = await createBookmark( userId, req.body.bookId, book.title, req.body.chapterId, req.body.chapterTitle, req.body.positionY );
*/
  return res.json(
    JSON.stringify({
        "message": "success",
        "subscriptions": userSubscriptions
    }))
});
