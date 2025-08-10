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
const  GOOGLE_CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH;

var serviceAccountPath = GOOGLE_CREDENTIALS_PATH;
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

const addUser = async ( user ) => {
  const docRef = db.collection('users').doc(user.id);
  try {
    await  docRef.set(user);
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const removeUser = async ( user ) => {
  const docRef = db.collection('users').doc(user.id);
  try {
    await  docRef.delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const addBook = async( book ) => {
  const docRef = db.collection('books').doc(book.id);
  try {
    await  docRef.set(book);
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const removeBook = async(book) => {
  const docRef = db.collection('books').doc(book.id);
  try {
    await docRef.delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const addChapter = async( chapter ) => {
  const docRef = db.collection('chapters').doc(chapter.id);
  try {
    await docRef.set(chapter);
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const removeChapter = async(chapter) => {
  const docRef = db.collection('chapters').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const addChapterText = async( chapter ) => {
  const docRef = db.collection('chaptertext').doc(chapter.id);
  try {
    await docRef.set(chapter);;
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const removeChapterText = async (chapter) => {
  const docRef = db.collection('chaptertext').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const addChapterAudio = async( chapter ) => {
  const docRef = db.collection('chapteraudio').doc(chapter.id);
  try {
    await docRef.set(chapter);
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const removeChapterAudio = async(chapter) => {
  const docRef = db.collection('chapteraudio').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}


const addToken = async( userid, token ) => {
  const docRef = db.collection('tokens').doc(userid);
  try {
    await docRef.set({
      token: token,
      userId: userid,
    });
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

const removeToken = async( userid ) => {
  const res = db.collection('tokens').doc(userid);
  try {
    await docRef.delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}



module.exports = {
  db,
  addUser,
  removeUser,
  addBook,
  removeBook,
  addChapter,
  removeChapter,
  addChapterText,
  removeChapterText,
  addChapterAudio,
  removeChapterAudio,
  addToken,
  removeToken
};
