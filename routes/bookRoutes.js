import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const bookRoutes = express.Router();
import { checkToken, checkIfTokenExpiredOrInvalid } from "../security/security.js";
import { db, getBook, createBookmark, removePreviousBookmark } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;

bookRoutes.get('/bookshelf', (req, res) => {
  console.log("get bookshelf called")
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



bookRoutes.get('/books', (req, res) => {
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

  console.log("books/books called");
  db.collection('books').where("category", "!=", "quetzal-condor").where("isParent", "==", true).where("visible", "==", true).orderBy("order", "asc").get()
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


bookRoutes.get('/getBooksByCategory', async (req, res) => {
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


bookRoutes.get('/book', (req, res) => {
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

bookRoutes.get('/bookForReview', (req, res) => {
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

  
  let bookId = req.query.id;
  
  db.collection('books').where("id", "==", bookId ).where("visible", "==", true).orderBy("order", "asc").get()
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


bookRoutes.get('/populateStore', (req, res) => {
  console.log("/populateStore called");
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
    //.where("id", not in , user.purchase

    db.collection('books')
      .where("category", "==", "for-sale")
      .where("isParent", "==", true)
      .where("visible", "==", true)
      .where('id', 'not-in', purchases)
      .orderBy("order", "asc").get()
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
