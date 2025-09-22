import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const bookmarkRoutes = express.Router();
import { checkToken } from "../security/security.js";
import { db, getBook, createBookmark, removePreviousBookmark } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;


bookmarkRoutes.post('/createBookmark', async (req, res) => {
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
  const userId = decodedPayload.userId;
  let bookId = req.body.bookId;
  let book = await getBook(bookId);
  let toRemove = userId+"-"+req.body.bookId;
  const removeMessage = await removePreviousBookmark( toRemove );
  const addMessage = await createBookmark( userId, req.body.bookId, book.title, req.body.chapterId, req.body.chapterTitle, req.body.positionY );

  return res.json(
    JSON.stringify({
        "message": addMessage
    }))
});

bookmarkRoutes.get('/getBookmarks', async (req, res) => {
  console.log("getBookmarks called")
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
  let myBookmarks = [];
  const docRef = db.collection('bookmarks').where("userId", "==", userId);
  try {
    await docRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        myBookmarks.push({ id: doc.id, ...doc.data() });
      });
    });
  } catch( err ) {
    console.log(err);
    return "Error";
  }
  return res.json(myBookmarks);

});


bookmarkRoutes.get('/getBookmark', async (req, res) => {
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
  let bookId = req.query.bookId;
  let bookmark = {};
  const docRef = db.collection('bookmarks').doc(userId + "-" + bookId);
  try {
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      // The document exists, so get its data
      bookmark = docSnap.data();
    }
  } catch( err ) {
    console.log(err);
    return "Error";
  }
  return res.json(bookmark);

});
