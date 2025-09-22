import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const chapterRoutes = express.Router();
import { checkToken } from "../security/security.js";
import { db } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;

chapterRoutes.get('/chapters', (req, res) => {
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

  console.log("chapters/chapters called");
  let parent = req.query.parent;
  console.log("parent " + parent);
  
  db.collection('chapters').where("parent", "==", parent).orderBy("order", "asc").get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return res.status(404).send('No Matching found');
      }

      let chapters = [];
      snapshot.forEach(doc => {
        chapters.push({ id: doc.id, ...doc.data() });
      });
      return res.json(chapters);
    })
    .catch(err => {
      console.error('Error getting documents', err);
      return res.status(500).send('Error retrieving users');
    });
});

chapterRoutes.get('/chapterContentText', (req, res) => {
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

  console.log('/chapterContentText');
  let chapterId = req.query.id;
  db.collection('chaptertext').where("id", "==", chapterId).orderBy("order", "asc").get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).send('No Matching found');
      }

      let chapters = [];
      snapshot.forEach(doc => {
        chapters.push({ id: doc.id, ...doc.data() });
      });
      return res.json(chapters);
    })
    .catch(err => {
      console.error('Error getting documents', err);
      return res.status(500).send('Error retrieving users');
    });
});



