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

// no need to even call this endpoint.
/*
router.post('/POST/logout', (req, res) => {
  const jwtToken = req.headers['authorization'];
  try {
      const decodedPayload = jwt.verify(jwtToken, jwtSecret);
      //console.log('Looking for expiration info on next line')
      //console.log(decodedPayload)
      //removeToken(decodedPayload.userId);
  } catch (error) {
      console.error('Error verifying or decoding token:', error.message);
  }
  return res.json(
    JSON.stringify({
      "message": "Success",
      "jwtToken": "",
      "refreshToken": "",
    })
  )
});
*/

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


      JSON.stringify({
        "message": "Your token was valid but now removed. Sign in again.",
        "jwtToken": "",
        "refreshToken": "",
      })

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



router.get('/GET/addBooks', (req, res) => {

  console.log("GET /GET/addBooks called");
  //removeAllBooks();
  let book = {}
  let chapter = {}


  book = {
    id: "the-nephite-record",
    title: "The Nephite Record",
    subTitle: "1844 Text",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/the-nephite-record-thumbnail-2.jpg",
    thumbnailTitle: "Nephite Record",
    isParent: true,
    hasChildBooks: true,
    order: 1,
    parent: "",
    visible: true
  }
  addBook(book);

  book = {
    id: "nr-introduction",
    title: "Introduction",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/intro-thumbnail.jpg",
    thumbnailTitle: "Intro",
    isParent: false,
    hasChildBooks: false,
    order: 1,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-intro-title-page",
    title: "Title Page",
    subTitle: "",
    order: 1,
    parent: "nr-introduction",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-intro-three-witnesses",
    title: "The Three Witnesses",
    subTitle: "",
    order: 2,
    parent: "nr-introduction",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-intro-eight-witnesses",
    title: "The Eight Witnesses",
    subTitle: "",
    order: 3,
    parent: "nr-introduction",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-1-nephi",
    title: "The First Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/1-nephi-thumbnail.jpg",
    thumbnailTitle: "1 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 2,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-1-nephi-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-1-nephi-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-1-nephi-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-1-nephi",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-2-nephi",
    title: "The Second Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/2-nephi-thumbnail.jpg",
    thumbnailTitle: "2 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 3,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-2-nephi-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-2-nephi-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-23",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-24",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-25",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-26",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-27",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-28",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-29",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-30",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-31",
    title: "Chapter 31",
    subTitle: "",
    order: 31,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-32",
    title: "Chapter 32",
    subTitle: "",
    order: 32,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-2-nephi-33",
    title: "Chapter 33",
    subTitle: "",
    order: 33,
    parent: "nr-2-nephi",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-jacob",
    title: "The Book of Jacob",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/jacob-thumbnail.jpg",
    thumbnailTitle: "Jacob",
    isParent: false,
    hasChildBooks: false,
    order: 4,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);


  chapter = {
    id: "nr-jacob-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-jacob-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-jacob",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-enos",
    title: "The Book of Enos",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/enos-thumbnail.jpg",
    thumbnailTitle: "Enos",
    isParent: false,
    hasChildBooks: false,
    order: 5,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-enos-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-enos",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-jarom",
    title: "The Book of Jarom",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/jarom-thumbnail.jpg",
    thumbnailTitle: "Jarom",
    isParent: false,
    hasChildBooks: false,
    order: 6,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-jarom-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-jarom",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-omni",
    title: "The Book of Omni",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/omni-thumbnail.jpg",
    thumbnailTitle: "Omni",
    isParent: false,
    hasChildBooks: false,
    order: 7,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-omni-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-omni",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-words-of-mormon",
    title: "Words of Mormon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/words-of-mormon-thumbnail.jpg",
    thumbnailTitle: "Words of Mormon",
    isParent: false,
    hasChildBooks: false,
    order: 8,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-words-of-mormon-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-words-of-mormon",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-mosiah",
    title: "The Book of Mosiah",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/mosiah-thumbnail.jpg",
    thumbnailTitle: "Mosiah",
    isParent: false,
    hasChildBooks: false,
    order: 9,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-mosiah-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-mosiah-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-23",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-24",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-25",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-26",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-27",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-28",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mosiah-29",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-mosiah",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-alma",
    title: "The Book of Alma",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/alma-thumbnail.jpg",
    thumbnailTitle: "Alma",
    isParent: false,
    hasChildBooks: false,
    order: 10,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-alma-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-alma-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-23",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-24",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-25",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-26",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-27",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-28",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-29",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-30",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-31",
    title: "Chapter 31",
    subTitle: "",
    order: 31,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-32",
    title: "Chapter 32",
    subTitle: "",
    order: 32,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-33",
    title: "Chapter 33",
    subTitle: "",
    order: 33,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-34",
    title: "Chapter 34",
    subTitle: "",
    order: 34,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-35",
    title: "Chapter 35",
    subTitle: "",
    order: 35,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-36",
    title: "Chapter 36",
    subTitle: "",
    order: 36,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-37",
    title: "Chapter 37",
    subTitle: "",
    order: 37,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-38",
    title: "Chapter 38",
    subTitle: "",
    order: 38,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-39",
    title: "Chapter 39",
    subTitle: "",
    order: 39,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-40",
    title: "Chapter 40",
    subTitle: "",
    order: 40,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-41",
    title: "Chapter 41",
    subTitle: "",
    order: 41,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-42",
    title: "Chapter 42",
    subTitle: "",
    order: 42,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-43",
    title: "Chapter 43",
    subTitle: "",
    order: 43,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-44",
    title: "Chapter 44",
    subTitle: "",
    order: 44,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-45",
    title: "Chapter 45",
    subTitle: "",
    order: 45,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-46",
    title: "Chapter 46",
    subTitle: "",
    order: 46,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-47",
    title: "Chapter 47",
    subTitle: "",
    order: 47,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-48",
    title: "Chapter 48",
    subTitle: "",
    order: 48,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-49",
    title: "Chapter 49",
    subTitle: "",
    order: 49,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-50",
    title: "Chapter 50",
    subTitle: "",
    order: 50,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-51",
    title: "Chapter 51",
    subTitle: "",
    order: 51,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-52",
    title: "Chapter 52",
    subTitle: "",
    order: 52,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-53",
    title: "Chapter 53",
    subTitle: "",
    order: 53,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-54",
    title: "Chapter 54",
    subTitle: "",
    order: 54,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-55",
    title: "Chapter 55",
    subTitle: "",
    order: 55,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-56",
    title: "Chapter 56",
    subTitle: "",
    order: 56,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-57",
    title: "Chapter 57",
    subTitle: "",
    order: 57,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-58",
    title: "Chapter 58",
    subTitle: "",
    order: 58,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-59",
    title: "Chapter 59",
    subTitle: "",
    order: 59,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-60",
    title: "Chapter 60",
    subTitle: "",
    order: 60,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-61",
    title: "Chapter 61",
    subTitle: "",
    order: 61,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-62",
    title: "Chapter 62",
    subTitle: "",
    order: 62,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-alma-63",
    title: "Chapter 63",
    subTitle: "",
    order: 63,
    parent: "nr-alma",
    visible: true
  }
  addChapter(chapter);



  book = {
    id: "nr-helaman",
    title: "The Book of Helaman",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/helaman-thumbnail.jpg",
    thumbnailTitle: "Helaman",
    isParent: false,
    hasChildBooks: false,
    order: 11,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);
  chapter = {
    id: "nr-helaman-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-helaman-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-helaman",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-helaman-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-helaman",
    visible: true
  }

  book = {
    id: "nr-3-nephi",
    title: "The Third Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/3-nephi-thumbnail.jpg",
    thumbnailTitle: "3 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 12,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-3-nephi-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-3-nephi-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-23",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-24",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-25",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-26",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-27",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-28",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-29",
    title: "Chapter 29",
    subTitle: "",
    order: 29,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-3-nephi-30",
    title: "Chapter 30",
    subTitle: "",
    order: 30,
    parent: "nr-3-nephi",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-4-nephi",
    title: "The Fourth Book of Nephi",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/4-nephi-thumbnail.jpg",
    thumbnailTitle: "4 Nephi",
    isParent: false,
    hasChildBooks: false,
    order: 13,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-4-nephi-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-4-nephi",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-mormon",
    title: "The Book of Mormon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/mormon-thumbnail.jpg",
    thumbnailTitle: "Mormon",
    isParent: false,
    hasChildBooks: false,
    order: 14,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-mormon-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-mormon-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-mormon-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-mormon",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-ether",
    title: "The Book of Ether",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/ether-thumbnail.jpg",
    thumbnailTitle: "Ether",
    isParent: false,
    hasChildBooks: false,
    order: 15,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nr-ether-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-ether-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-ether-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nr-ether",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nr-moroni",
    title: "The Book of Moroni",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/nephite-record/moroni-thumbnail.jpg",
    thumbnailTitle: "Moroni",
    isParent: false,
    hasChildBooks: false,
    order: 16,
    parent: "the-nephite-record",
    visible: true
  }
  addBook(book);


    chapter = {
    id: "nr-moroni-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nr-moroni-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nr-moroni-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nr-moroni",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "the-oral-torah",
    title: "The Oral Torah",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/the-oral-torah-2.jpg",
    thumbnailTitle: "Oral Torah",
    isParent: true,
    hasChildBooks: true,
    order: 2,
    parent: "",
    visible: false
  }
  addBook(book);

  book = {
    id: "the-new-testament",
    title: "The New Testament",
    subTitle: "KJV",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament-kjv-thumbnail-2.jpg",
    thumbnailTitle: "",
    isParent: true,
    hasChildBooks: true,
    order: 3,
    parent: "",
    visible: true
  }
  addBook(book);


  book = {
    id: "nt-matthew",
    title: "The Gospel According to St Matthew",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/matthew-thumbnail.jpg",
    thumbnailTitle: "Matthew",
    isParent: false,
    hasChildBooks: false,
    order: 1,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  chapter = {
    id: "nt-matthew-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-matthew-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-23",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-24",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-25",
    title: "Chapter 25",
    subTitle: "",
    order: 25,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-26",
    title: "Chapter 26",
    subTitle: "",
    order: 26,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-27",
    title: "Chapter 27",
    subTitle: "",
    order: 27,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-matthew-28",
    title: "Chapter 28",
    subTitle: "",
    order: 28,
    parent: "nt-matthew",
    visible: true
  }
  addChapter(chapter);






  book = {
    id: "nt-mark",
    title: "The Gospel According to St Mark",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/mark-thumbnail.jpg",
    thumbnailTitle: "Mark",
    isParent: false,
    hasChildBooks: false,
    order: 2,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nt-mark-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-mark-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-mark-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-mark",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nt-luke",
    title: "The Gospel According to St Luke",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/luke-thumbnail.jpg",
    thumbnailTitle: "Luke",
    isParent: false,
    hasChildBooks: false,
    order: 3,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nt-luke-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-luke-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-22",
    title: "Chapter 22",
    subTitle: "",
    order: 22,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-23",
    title: "Chapter 23",
    subTitle: "",
    order: 23,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-luke-24",
    title: "Chapter 24",
    subTitle: "",
    order: 24,
    parent: "nt-luke",
    visible: true
  }
  addChapter(chapter);


  book = {
    id: "nt-john",
    title: "The Gospel According to St John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/john-thumbnail.jpg",
    thumbnailTitle: "John",
    isParent: false,
    hasChildBooks: false,
    order: 4,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);

  chapter = {
    id: "nt-john-1",
    title: "Chapter 1",
    subTitle: "",
    order: 1,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);

  chapter = {
    id: "nt-john-2",
    title: "Chapter 2",
    subTitle: "",
    order: 2,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-3",
    title: "Chapter 3",
    subTitle: "",
    order: 3,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-4",
    title: "Chapter 4",
    subTitle: "",
    order: 4,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-5",
    title: "Chapter 5",
    subTitle: "",
    order: 5,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-6",
    title: "Chapter 6",
    subTitle: "",
    order: 6,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-7",
    title: "Chapter 7",
    subTitle: "",
    order: 7,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-8",
    title: "Chapter 8",
    subTitle: "",
    order: 8,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-9",
    title: "Chapter 9",
    subTitle: "",
    order: 9,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-10",
    title: "Chapter 10",
    subTitle: "",
    order: 10,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-11",
    title: "Chapter 11",
    subTitle: "",
    order: 11,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-12",
    title: "Chapter 12",
    subTitle: "",
    order: 12,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-13",
    title: "Chapter 13",
    subTitle: "",
    order: 13,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-14",
    title: "Chapter 14",
    subTitle: "",
    order: 14,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-15",
    title: "Chapter 15",
    subTitle: "",
    order: 15,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-16",
    title: "Chapter 16",
    subTitle: "",
    order: 16,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-17",
    title: "Chapter 17",
    subTitle: "",
    order: 17,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-18",
    title: "Chapter 18",
    subTitle: "",
    order: 18,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-19",
    title: "Chapter 19",
    subTitle: "",
    order: 19,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-20",
    title: "Chapter 20",
    subTitle: "",
    order: 20,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "nt-john-21",
    title: "Chapter 21",
    subTitle: "",
    order: 21,
    parent: "nt-john",
    visible: true
  }
  addChapter(chapter);




  book = {
    id: "nt-acts",
    title: "The Acts of the Apostles",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/acts-thumbnail.jpg",
    thumbnailTitle: "Acts",
    isParent: false,
    hasChildBooks: false,
    order: 5,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-romans",
    title: "The Epistle of Paul the Apostle to the Romans",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/romans-thumbnail.jpg",
    thumbnailTitle: "Romans",
    isParent: false,
    hasChildBooks: false,
    order: 6,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-1-corinthians",
    title: "The First Epistle of Paul the Apostle to the Corintians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-corinthians-thumbnail.jpg",
    thumbnailTitle: "1 Corinthians",
    isParent: false,
    hasChildBooks: false,
    order: 7,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-2-corinthians",
    title: "The Second Epistle of Paul the Apostle to the Corintians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-corinthians-thumbnail.jpg",
    thumbnailTitle: "2 Corinthians",
    isParent: false,
    hasChildBooks: false,
    order: 8,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-galations",
    title: "The Epistle of Paul the Apostle to the Galatians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/galatians-thumbnail.jpg",
    thumbnailTitle: "Galatians",
    isParent: false,
    hasChildBooks: false,
    order: 9,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-ephesians",
    title: "The Epistle of Paul the Apostle to the Ephesians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/ephesians-thumbnail.jpg",
    thumbnailTitle: "Ephesians",
    isParent: false,
    hasChildBooks: false,
    order: 10,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-philippians",
    title: "The Epistle of Paul the Apostle to the Philippians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/philippians-thumbnail.jpg",
    thumbnailTitle: "Philippians",
    isParent: false,
    hasChildBooks: false,
    order: 11,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-colossians",
    title: "The Epistle of Paul the Apostle to the Colossians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/colossians-thumbnail.jpg",
    thumbnailTitle: "Colossians",
    isParent: false,
    hasChildBooks: false,
    order: 12,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-1-thessalonians",
    title: "The First Epistle of Paul the Apostle to the Thessalonians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-thessalonians-thumbnail.jpg",
    thumbnailTitle: "1 Thessalonians",
    isParent: false,
    hasChildBooks: false,
    order: 13,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-2-thessalonians",
    title: "The Second Epistle of Paul the Apostle to the Thessalonians",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-thessalonians.jpg",
    thumbnailTitle: "2 Thessalonians",
    isParent: false,
    hasChildBooks: false,
    order: 14,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-1-timothy",
    title: "The First Epistle of Paul the Apostle to Timothy",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-timothy-thumbnail.jpg",
    thumbnailTitle: "1 Timothy",
    isParent: false,
    hasChildBooks: false,
    order: 15,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-2-timothy",
    title: "The Second Epistle of Paul the Apostle to Timothy",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-timothy-thumbnail.jpg",
    thumbnailTitle: "2 Timothy",
    isParent: false,
    hasChildBooks: false,
    order: 16,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-titus",
    title: "The Epistle of Paul to Titus",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/titus-thumbnail.jpg",
    thumbnailTitle: "Titus",
    isParent: false,
    hasChildBooks: false,
    order: 17,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-philemon",
    title: "The Epistle of Paul to Philemon",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/philemon-thumbnail.jpg",
    thumbnailTitle: "Philemon",
    isParent: false,
    hasChildBooks: false,
    order: 18,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-hebrews",
    title: "The Epistle of Paul the Apostle to the Hebrews",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/hebrews-thumbnail.jpg",
    thumbnailTitle: "Hebrews",
    isParent: false,
    hasChildBooks: false,
    order: 19,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-james",
    title: "The General Epistle of James",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/james-thumbnail.jpg",
    thumbnailTitle: "James",
    isParent: false,
    hasChildBooks: false,
    order: 20,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-1-peter",
    title: "The First Epistle General of Peter",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-peter-thumbnail.jpg",
    thumbnailTitle: "1 Peter",
    isParent: false,
    hasChildBooks: false,
    order: 21,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-2-peter",
    title: "The Second Epistle General of Peter",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-peter.jpg",
    thumbnailTitle: "2 Peter",
    isParent: false,
    hasChildBooks: false,
    order: 22,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-1-john",
    title: "The First Epistle of John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/first-john-thumbnail.jpg",
    thumbnailTitle: "1 John",
    isParent: false,
    hasChildBooks: false,
    order: 23,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-2-john",
    title: "The Second Epistle of John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/second-john-thumbnail.jpg",
    thumbnailTitle: "2 John",
    isParent: false,
    hasChildBooks: false,
    order: 24,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);

  book = {
    id: "nt-3-john",
    title: "The Third Epistle of John",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/third-john-thumbnail.jpg",
    thumbnailTitle: "3 John",
    isParent: false,
    hasChildBooks: false,
    order: 24,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-jude",
    title: "The General Epistle of Jude",
    subTitle: "",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/jude-thumbnail.jpg",
    thumbnailTitle: "Jude",
    isParent: false,
    hasChildBooks: false,
    order: 26,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);
  book = {
    id: "nt-revelation",
    title: "The Revelation of St John the Divine",
    subTitle: "",
    thumbnailTitle: "Revelation",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/new-testament/revelation-thumbnail.jpg",
    isParent: false,
    hasChildBooks: false,
    order: 27,
    parent: "the-new-testament",
    visible: true
  }
  addBook(book);



  book = {
    id: "the-doctrine-and-covenants",
    title: "The Doctrine and Covenants",
    subTitle: "1844 - Nauvoo Edition",
    thumbnail: "https://storage.googleapis.com/sacred-records/books/doctrine%26covenants-1844-thumbnail-2.jpg",
    thumbnailTitle: "D&C-1844",
    isParent: true,
    hasChildBooks: false,
    order: 4,
    parent: "",
    visible: false
  }
  addBook(book);

  chapter = {
    id: "dc-introduction",
    title: "Introduction",
    subTitle: "",
    order: 1,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-lectures-1",
    title: "Lectures on Faith",
    subTitle: "Chapter 1",
    order: 2,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-lectures-2",
    title: "Lectures on Faith",
    subTitle: "Chapter 2",
    order: 3,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-lectures-3",
    title: "Lectures on Faith",
    subTitle: "Chapter 3",
    order: 4,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-lectures-4",
    title: "Lectures on Faith",
    subTitle: "Chapter 4",
    order: 5,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-lectures-5",
    title: "Lectures on Faith",
    subTitle: "Chapter 5",
    order: 6,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-section-1",
    title: "Section 1",
    subTitle: "",
    order: 7,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-section-2",
    title: "Section 2",
    subTitle: "",
    order: 8,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-section-3",
    title: "Section 3",
    subTitle: "",
    order: 9,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);
  chapter = {
    id: "dc-section-4",
    title: "Section 4",
    subTitle: "",
    order: 10,
    parent: "the-doctrine-and-covenants",
    visible: true
  }
  addChapter(chapter);


  console.log("Books Added");
  res.send(
    JSON.stringify({
      "message": "success"
    })
  );
});


module.exports = router;




