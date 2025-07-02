const express = require("express");
const { text } = require('body-parser');
const router = express.Router();


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
    res.json(users);
});


module.exports = router;