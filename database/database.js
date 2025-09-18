//import { Firestore, doc } from '@google-cloud/firestore';
//import pkg from '@google-cloud/firestore';
//const { doc } = pkg;
//const settings = require("./../settings/settings.js");
//import { isProduction, isDevelopment, GOOGLE_APPLICATION_CREDENTIALS } from "./../settings/settings.js"
//import { constants } from "node:buffer";
import 'dotenv/config'; 
import admin from 'firebase-admin';
import { resolve } from 'path';


const  GOOGLE_CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH;
var serviceAccountPath = GOOGLE_CREDENTIALS_PATH;
/*
if (serviceAccountPath) {
  const serviceAccount = require(serviceAccountPath);
  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
  });
}
*/
export let db = null;


if (serviceAccountPath) {
  // Use dynamic import() to load the JSON file
  (async () => {
    try {
      // Use resolve to handle relative or absolute paths correctly
      const absolutePath = resolve(serviceAccountPath);
      const serviceAccount = await import(absolutePath, { with: { type: 'json' } });
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount.default)
      });
      db = admin.firestore();
      db.settings({
        ignoreUndefinedProperties: true, // Optional: useful for preventing errors with undefined values
        databaseId: 'sacredrecords', // Uncomment and replace with your actual database ID if
      });

      console.log('Firebase Admin initialized successfully.');
    } catch (error) {
      console.error('Error initializing Firebase Admin:', error);
    }
  })();
} else {
  console.error('GOOGLE_CREDENTIALS_PATH is not set.');
}

export const addOrUpdateUser = async( user ) => {
  const docRef = db.collection('users').doc(user.id);
  await docRef.set( user, { merge: true } );
}

// replace the user object with this one.
export const updateUser = async( user ) => {
  const docRef = db.collection('users').doc(user.id);
  await docRef.set( user );
}

export const  getUserLanguage = async( userId) => {
  const docRef = db.collection('users').doc(userId);
  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      // The document exists, so get its data
      const userData = docSnap.data();
      return userData?.language || "";
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
  return "";
}

export const  getUser= async( userId) => {
  const docRef = db.collection('users').doc(userId);
  try {
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      // The document exists, so get its data
      const userData = docSnap.data();
      return userData;
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error getting user:", error);
  }
  return "";
}

export const  getBook = async( bookId ) => {
  const docRef = db.collection('books').doc(bookId);
  try {
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      // The document exists, so get its data
      const bookData = docSnap.data();
      return bookData;
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
  return "";
}

export const createBookmark = async( userId, bookId, bookTitle, chapterId, chapterTitle, positionY ) => {
  let bookmark = {
    userId: userId,
    bookId: bookId,
    bookTitle: bookTitle,
    chapterId: chapterId,
    chapterTitle: chapterTitle,
    positionY: positionY
  }
  const docRef = db.collection('bookmarks').doc(userId + "-" + bookId);
  try {
    await  docRef.set(bookmark);
    console.log('Bookmark successfully Added!');
    return "success";
  } catch (error) {
    console.error('Error adding purchase:', error);
    return "error";
  }
}

export const removePreviousBookmark = async(bookmarkId) => {
  const docRef = db.collection('bookmarks').doc(bookmarkId);
  try {
    await docRef.delete();
    console.log('Bookmark successfully deleted!');
  } catch (error) {
    console.error('Error deleting bookmark:', error);
  }
}


export const  getUserPurchases = async( userId) => {
  const docRef = db.collection('users').doc(userId);
  try {
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      // The document exists, so get its data
      const userData = docSnap.data();
      return userData.purchases;
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
  return "";
}

export const  addPurchase = async( userId, name, email, bookId, bookTitle, code, paidPrice) => {
  console.log("addPurchase");
  /*
    userId, name, req.body.id, req.body.bookTitle, req.body.code, req.body.bookPrice
  */
  let now = new Date();
  let systemTime = now.toISOString();
  const readableDate = now.toDateString();
  const docRef = db.collection('purchases').doc(systemTime);
  try {
    let purchase = {
      userId: userId,
      name: name,
      email: email,
      bookId: bookId,
      bootTitle: bookTitle,
      code: code,
      paidPrice: paidPrice,
      time : systemTime,
      date : readableDate
    }
    await  docRef.set(purchase);
  } catch (error) {
    console.error('Error adding purchase:', error);
  }
}

export const  saveLanguageToUserProfile = async( userId, language ) => {
  const docRef = db.collection('users').doc(userId);
  await docRef.update( { language: language } );
}

export const  savePurchasesToUserProfile = async( userId, purchases ) => {
  const docRef = db.collection('users').doc(userId);
  await docRef.update( { purchases: purchases } );
}

export const removeUser = async ( user ) => {
  const docRef = db.collection('users').doc(user.id);
  try {
    await  docRef.delete();
    console.log('User successfully deleted!');
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

export const addBook = async( book ) => {
  const docRef = db.collection('books').doc(book.id);
  try {
    await  docRef.set(book);
    console.log('Book successfully added!');
  } catch (error) {
    console.error('Error adding book:', error);
  }
}

export const removeBook = async(book) => {
  const docRef = db.collection('books').doc(book.id);
  try {
    await docRef.delete();
    console.log('Book successfully deleted!');
  } catch (error) {
    console.error('Error deleting book:', error);
  }
}

export const addChapter = async( chapter ) => {
  const docRef = db.collection('chapters').doc(chapter.id);
  try {
    await docRef.set(chapter);
    console.log('Chapter successfully added!');
  } catch (error) {
    console.error('Error adding chapter:', error);
  }
}

export const removeChapter = async(chapter) => {
  const docRef = db.collection('chapters').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Chapter successfully deleted!');
  } catch (error) {
    console.error('Error deleting chapter:', error);
  }
}

export const addChapterText = async( chapter ) => {
  const docRef = db.collection('chaptertext').doc(chapter.id);
  try {
    await docRef.set(chapter);;
    console.log('Chapter Text successfully added!');
  } catch (error) {
    console.error('Error adding chapter text:', error);
  }
}

export const removeChapterText = async (chapter) => {
  const docRef = db.collection('chaptertext').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Chapter text successfully deleted!');
  } catch (error) {
    console.error('Chapter text deletion error:', error);
  }
}

export const addChapterAudio = async( chapter ) => {
  const docRef = db.collection('chapteraudio').doc(chapter.id);
  try {
    await docRef.set(chapter);
    console.log('Audio Chapter successfully added!');
  } catch (error) {
    console.error('Error adding Audio Chapter:', error);
  }
}

export const removeChapterAudio = async(chapter) => {
  const docRef = db.collection('chapteraudio').doc(chapter.id);
  try {
    await docRef.delete();
    console.log('Audio Chapter successfully deleted!');
  } catch (error) {
    console.error('Error deleting audio Chapter:', error);
  }
}


export const addToken = async( userid, token ) => {
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

export const removeToken = async( userid ) => {
  const res = db.collection('tokens').doc(userid);
  try {
    await docRef.delete();
    console.log('Token successfully deleted!');
  } catch (error) {
    console.error('Error removing token:', error);
  }
}

