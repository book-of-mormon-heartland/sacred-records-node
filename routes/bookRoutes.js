import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const bookRoutes = express.Router();
import { checkToken } from "../security/security.js";
import { db, getBook, createBookmark, removePreviousBookmark } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;



bookRoutes.get('/getBooksByCategory', async (req, res) => {
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
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId=decodedPayload.userId;
  let category = req.query.category;

  let myBooks = [];
  const docRef = db.collection('books').where("category", "==", category).where("isParent", "==", true).where("visible", "==", true).orderBy("order", "asc");
  try {
    await docRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        myBooks.push({ id: doc.id, ...doc.data() });
      });
    });
  } catch( err ) {
    console.log(err);
    return "Error";
  }
  return res.json(myBooks);
});


