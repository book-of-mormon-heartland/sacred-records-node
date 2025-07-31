const express = require("express");
const { text } = require('body-parser');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { db, addGoogleUser, addGoogleToken, removeGoogleToken } = require("../database/database.js"); // Import the database module

const GOOGLE_WEB_CLIENT_ID = '376185747738-hced54r8i2jc4bjq428i54dp2g4uhnvo.apps.googleusercontent.com'; 
const GOOGLE_ANDROID_CLIENT_ID = '376185747738-ha1jqq32roeta8g7c34c7koend7lmp5o.apps.googleusercontent.com'; 
const GOOGLE_IOS_CLIENT_ID = '376185747738-t1nrjh269jqarco0grlo6a5vs8fcbf8b.apps.googleusercontent.com';


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
          "message": "Error: Token user ID does not match provided user ID"
        }));
    }
    // Add or update the user.  Same thing here.
    addGoogleUser(user);
    addGoogleToken(token, user.id);
    return res.json(
      JSON.stringify({
        "message": "Success"
      })
    )
  }
  verify().catch((error) => {
    return res.json(
      JSON.stringify({
        "message": error
      })
    );
  });

});

router.post('/POST/googlelogout', (req, res) => {
  const userid = req.body.userid;
  //console.log("Deleting token for userid: ", userid);
  removeGoogleToken(userid);
  return res.json(
    JSON.stringify({
      "message": "Success"
    })
  )
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