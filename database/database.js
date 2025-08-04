const { Firestore, doc, deleteDoc } = require('@google-cloud/firestore');
//import {  doc, deleteDoc } from "firebase/firestore";
const settings = require('./../settings/settings.js');

//console.log(settings)

// works in docker
/*
const admin = require('firebase-admin');

const serviceAccount = require('./../keys/trisummit-io-feea3939aa4d.json'); // Adjust the path as needed
admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
db.settings({
  ignoreUndefinedProperties: true, // Optional: useful for preventing errors with undefined values
  databaseId: 'authenticator', // Uncomment and replace with your actual database ID if
});
*/

// code for dev with propers settings in the development environment including see readme.md

require('dotenv').config();
const admin = require('firebase-admin');
var serviceAccountPath = settings.GOOGLE_APPLICATION_CREDENTIALS;
if (serviceAccountPath) {
  const serviceAccount = require(serviceAccountPath);
  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
db.settings({
  ignoreUndefinedProperties: true, // Optional: useful for preventing errors with undefined values
  databaseId: 'sacredrecords', // Uncomment and replace with your actual database ID if
});

function addUser( user ) {
  const docRef = db.collection('users').doc(user.id);
  docRef.set({
        photo: user.photo,
        givenName: user.givenName,
        familyName: user.familyName,
        email: user.email,
        name: user.name,
        id: user.id,
  });
      //console.log('Google User Added Successfully!');
}

function addBook( book ) {
  const docRef = db.collection('books').doc(book.id);
  docRef.set(book);     //console.log('Google User Added Successfully!');
}

function addChapter( chapter ) {
  const docRef = db.collection('chapters').doc(chapter.id);
  docRef.set(chapter);     //console.log('Google User Added Successfully!');
}


function addToken( userid, token ) {
  const docRef = db.collection('tokens').doc(userid);
  docRef.set({
    token: token,
    userId: userid,
  });
}

function removeToken( userid ) {
  try {
    const res = db.collection('tokens').doc(userid).delete();
  } catch (error) {
    console.error("Error removing document: ", error);
  }
}



module.exports = {
  db,
  addUser,
  addBook,
  addChapter,
  addToken,
  removeToken
};
