const express = require("express");
const { text } = require('body-parser');
const router = express.Router();
const db = require("../database/database.js"); // Import the database module




// Home page route.
router.get("/", function (req, res) {

     res.send("Rest home page");
});

let users = {
    id: 1, 
    name: 'Alice'
};

// GET all users
router.get('/GET/users', (req, res) => {
     db.collection('testusers').get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return res.status(404).send('No users found');
      }  

      let users = [];
      snapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });
      res.json(users);
    })
    .catch(err => {
      console.error('Error getting documents', err);
      res.status(500).send('Error retrieving users');
    });  
    //res.json(users);
});


module.exports = router;