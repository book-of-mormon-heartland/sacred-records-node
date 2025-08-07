
const express = require("express");
const { text } = require('body-parser');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { db, addUser, addBook, addToken, removeToken, getBook, addChapter } = require("../database/database.js"); // Import the database module
require('dotenv').config(); // Load environment variables


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;


// Home page route.
router.get("/", function (req, res) {
  res.send("Rest home page");
});


router.post('/POST/googlelogin', (req, res) => {

  // retrieve the token
  const token = req.body.token;
  const user = req.body.user;
  
  // validate the token with google.
  const client = new OAuth2Client(GOOGLE_WEB_CLIENT_ID);
  async function verify() {
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
    addUser(user);
    // generate the jwt token.
    let jwtToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    let refreshToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '7d' });
    //no need to store in database.
    //addToken(user.id, jwtToken);
    return res.json(
      JSON.stringify({
        "message": "Success",
        "jwtToken": jwtToken,
        "refreshToken": refreshToken,
      })
    )
  }
  verify().catch((error) => {
    return res.json(
      JSON.stringify({
        "message": error,
        "jwtToken": "",
        "refreshToken": "",
      })
    );
  });
});


router.post('/POST/refreshtoken', (req, res) => {
  const jwtToken = req.headers['authorization'];
  try {
      const payload = jwt.verify(jwtToken, jwtSecret);
      console.log(payload);
      console.log(payload.userId);
      let expiration_timestamp = payload.exp
      let current_timestamp_utc = int(time.time()) 
      console.log("Expiration Timestamp: ", expiration_timestamp);
      console.log("Current Timestamp: ", current_timestamp_utc);

      if (expiration_timestamp <= current_timestamp_utc){
        let newJwtToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
        return res.json(
          JSON.stringify({
            "message": "Token Refresh.",
            "jwtToken": newJwtToken,
          })
        );
      } else {
        console.log("Token is still valid");
        return res.json(
          JSON.stringify({
            "message": "Token is still valid, no need to refresh.",
            "jwtToken": jwtToken,
          })
        );
      }
  } catch (error) {
    console.error('Error verifying or decoding token:', error.message);
    return res.json(
      JSON.stringify({
        "message": "Error",
        "jwtToken": "",
        "refreshToken": "",
      })
    )
  }
});

router.get('/GET/book', (req, res) => {
  let bookId = req.query.bookid;
  console.log("bookId " + bookId);
  console.log("GET /GET/book called");
  
  db.collection('books').where("parent", "==", bookId ).where("visible", "==", true).orderBy("order", "asc").get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        //return res.status(404).send('No Books found');
        return res.json([]);
      }

      let book = [];
      snapshot.forEach(doc => {
        book.push({ id: doc.id, ...doc.data() });
      });
      return res.json(book);
    })
    .catch(err => {
      console.error('Error getting documents', err);
      return res.status(500).send('Error retrieving book');
    });
    
});

router.get('/GET/books', (req, res) => {

  console.log("GET /GET/books called");
  
   db.collection('books').where("isParent", "==", true).where("visible", "==", true).orderBy("order", "asc").get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return res.status(404).send('No Matching found');
      }

      let users = [];
      snapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });
      return res.json(users);
    })
    .catch(err => {
      console.error('Error getting documents', err);
      return res.status(500).send('Error retrieving users');
    });
});


router.get('/GET/chapters', (req, res) => {

  console.log("GET /GET/chapters called");
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




// GET all users
router.get('/GET/users', (req, res) => {

  // need protection for only authenticated and authorized users.
  db.collection('users').get()
    .then(snapshot => {
      if (snapshot.empty) {
        //console.log('No matching documents.');
        return res.status(404).send('No users found');
      }

      let users = [];
      snapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });
      return res.json(users);
    })
    .catch(err => {
      //console.error('Error getting documents', err);
      return res.status(500).send('Error retrieving users');
    });
});


router.post("/ocr", function (req, res) {
  let vision = new googleVision();
  vision.performOcrScan(req.body.url).then(response => {
    try {
      response.fullTextAnnotation.text;
    } catch (error) {
      return res.status(404).send({
        error: 'error',
        content: 'Error - Check that the URL is correct.'
      });
    }

    if (!(response)) {
      return res.status(404).send({
        error: 'error',
        content: 'Error - Check that the URL is correct.'
      });
    }
    res.send(
      JSON.stringify({
        "content": response.fullTextAnnotation.text
      })
    );
  });
});

// ocr rest call.
router.post("/translate", function (req, res) {
  let languageFrom = req.body.languageFrom;
  let languageTo=req.body.languageTo;
  let originalContent = req.body.originalContent;
  let translate = new googleTranslate();
  translate.performTranslation(languageFrom, languageTo, originalContent).then(response => {
    //console.log(response);
    if (!(response)) {
      return res.status(404).send({
        error: 'error',
        content: 'Error - Check that the URL is correct.'
      });
    }
    let translationValue = "";
    for (const translation of response.translations) {
      // add a line separator if there is more than one translation.
      if(translationValue.toString().length > 1) {
        translationValue += '\n____________\n';
      }
      translationValue += translation.translatedText;
    }
    console.log(translationValue);
    res.send(
      JSON.stringify({
        "content": translationValue
      })
    );
  });
});

module.exports = router;