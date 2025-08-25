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
    console.log('User successfully added!');
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

const removeUser = async ( user ) => {
  const docRef = db.collection('users').doc(user.id);
  try {
    await  docRef.delete();
    console.log('User successfully deleted!');
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

const addBook = async( book ) => {
  const docRef = db.collection('books').doc(book.id);
  try {
    await  docRef.set(book);
    console.log('Book successfully added!');
  } catch (error) {
    console.error('Error adding book:', error);
  }
}

const removeBook = async(book) => {
  const docRef = db.collection('books').doc(book.id);
  try {
    await docRef.delete();
    console.log('Book successfully deleted!');
  } catch (error) {
    console.error('Error deleting book:', error);
  }
}

const addChapter = async( chapter ) => {
  const docRef = db.collection('chapters').doc(chapter.id);
  try {
    await docRef.set(chapter);
    console.log('Chapter successfully added!');
  } catch (error) {
    console.error('Error adding chapter:', error);
  }
}

const removeChapter = async(chapter) => {
  const docRef = db.collection('chapters').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Chapter successfully deleted!');
  } catch (error) {
    console.error('Error deleting chapter:', error);
  }
}

const addChapterText = async( chapter ) => {
  const docRef = db.collection('chaptertext').doc(chapter.id);
  try {
    await docRef.set(chapter);;
    console.log('Chapter Text successfully added!');
  } catch (error) {
    console.error('Error adding chapter text:', error);
  }
}

const removeChapterText = async (chapter) => {
  const docRef = db.collection('chaptertext').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Chapter text successfully deleted!');
  } catch (error) {
    console.error('Chapter text deletion error:', error);
  }
}

const addChapterAudio = async( chapter ) => {
  const docRef = db.collection('chapteraudio').doc(chapter.id);
  try {
    await docRef.set(chapter);
    console.log('Audio Chapter successfully added!');
  } catch (error) {
    console.error('Error adding Audio Chapter:', error);
  }
}

const removeChapterAudio = async(chapter) => {
  const docRef = db.collection('chapteraudio').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Audio Chapter successfully deleted!');
  } catch (error) {
    console.error('Error deleting audio Chapter:', error);
  }
}


const addToken = async( userid, token ) => {
  const docRef = db.collection('tokens').doc(userid);
  try {
    await docRef.set({
      token: token,
      userId: userid,
    });
    console.log('token successfully added!');
  } catch (error) {
    console.error('Error adding token:', error);
  }
}

const removeToken = async( userid ) => {
  const res = db.collection('tokens').doc(userid);
  try {
    await docRef.delete();
    console.log('Token successfully deleted!');
  } catch (error) {
    console.error('Error removing token:', error);
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
