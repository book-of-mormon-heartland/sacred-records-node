
import express from 'express';
//import { text } from 'body-parser';
import { OAuth2Client } from 'google-auth-library';
import 'dotenv/config'; 
import jwt from 'jsonwebtoken';
import { db, addOrUpdateUser, getUserLanguage, saveLanguageToUserProfile, getUserPurchases } from "../database/database.js"; // Import the database module


const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';
const jwtSecret = process.env.JWT_SECRET;

export const router = express.Router();

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
    //user.purchases=user.purchases || ['gospel-of-nicodemus-en', 'the-nephite-record-en', 'the-sacred-tree-en']
    await addOrUpdateUser(user);
    let language = await getUserLanguage(user.id);
    let purchases = await getUserPurchases(user.id);
    if(!purchases) {
      console.log("log: no purchases array found, setting to empty array");
      purchases = ["the-sacred-tree-en"];
      user.purchases = purchases;
      await addOrUpdateUser(user);
    }
    console.log(purchases);
/*
purchases
(array) 
0: "gospel-of-nicodemus-en"
(string) 
1: "the-nephite-record-en"
(string) 
2: "the-sacred-tree-en"
*/



    /*
    let purchases = await getUserPurchases(user.id);
    if(purchases.length===0 ) {
      user.purchases = ['the-sacred-tree-en'];
      addOrUpdateUser(user);
    }
    */
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

router.get('/GET/populateStore', (req, res) => {
  console.log("GET /GET/populateStore called");
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
  let books=[];

  db.collection('users').where("id", "==", userId).get()
  .then(snapshot => {
    let users = [];
    if (snapshot.empty) {
      //console.log("No matching documents.");
      //return res.json(users);
    }
    snapshot.forEach(user => {
      users.push({ id: user.id, ...user.data() });
    });
    let purchases = users[0].purchases || [];
    //
    //.where("id", not in , user.purchases)
    db.collection('books').where("isParent", "==", true).where("visible", "==", true).where('id', 'not-in', purchases).orderBy("order", "asc").get()
      .then(snapshot => {
        let books = [];
        if (snapshot.empty) {
          return res.json(books);
        }
        snapshot.forEach(doc => {
          books.push({ id: doc.id, ...doc.data() });
        });
        return res.json(books);
      })
      .catch(err => {
        console.error('Error getting documents', err);
        return res.status(500).send('Error retrieving users');
      });
    }  
  );
});

router.get('/GET/book', (req, res) => {
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

  
  let bookId = req.query.bookid;
  
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

router.get('/GET/bookshelf', (req, res) => {
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
  // get the user and find the [] of books.
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId=decodedPayload.userId;
  let books=[];

  db.collection('users').where("id", "==", userId).get()
  .then(snapshot => {
    let users = [];
    if (snapshot.empty) {
      //console.log("No matching documents.");
      //return res.json(users);
    }
    snapshot.forEach(user => {
      users.push({ id: user.id, ...user.data() });
    });
    let purchases = users[0].purchases || [];
    // now get each book that matches the purchase IDs.
    if(purchases.length === 0) {
      return res.json([]);
    }

    // Map each purchase ID to a Firestore query promise.
    let bookPromises = purchases.map(bookId => {
      // Return the promise from the map callback.
      return db.collection('books').doc(bookId).get()
        .then(doc => {
          // Check if the document exists and return the data.
          if (doc.exists) {
            return { id: doc.id, ...doc.data() };
          }
          // Return null or handle the non-existent case.
          return null;
        })
        .catch(err => {
          console.error("Error fetching book:", err);
          return null;
        });
    });

    // Wait for all promises to resolve.
    Promise.all(bookPromises).then(booksArray => {
      // Filter out any null values from the array (for non-existent documents).
      const books = booksArray.filter(book => book !== null);
      //console.log(books);
      return res.json(books);
    }).catch(err => {
      console.error("Error with Promise.all:", err);
      return res.status(500).send("An error occurred");
    });
  });
});



router.get('/GET/books', (req, res) => {
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

  console.log("GET /GET/books called");
  db.collection('books').where("isParent", "==", true).where("visible", "==", true).orderBy("order", "asc").get()
    .then(snapshot => {
      let books = [];
      if (snapshot.empty) {
        return res.json(books);
      }
      snapshot.forEach(doc => {
        books.push({ id: doc.id, ...doc.data() });
      });
      return res.json(books);
    })
    .catch(err => {
      console.error('Error getting documents', err);
      return res.status(500).send('Error retrieving users');
    });
  }
);


router.get('/GET/chapters', (req, res) => {
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

router.get('/GET/chapterContentText', (req, res) => {
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

  console.log('/GET/chapterContentText');
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


const checkToken = (jwtTokenValue) => {
    const decodedPayload = jwt.verify(jwtTokenValue, jwtSecret);
    let expiration_timestamp = decodedPayload.exp;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const isExpired = decodedPayload.exp < currentTimeInSeconds;
    
    return !isExpired;
}

