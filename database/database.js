const { Firestore } = require('@google-cloud/firestore');


/*. works
const admin = require('firebase-admin');
const serviceAccount = require('./trisummit-io-feea3939aa4d.json'); // Adjust the path as needed
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
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS; // Or your custom env variable name
if (serviceAccountPath) {
    const serviceAccount = require(serviceAccountPath);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} else {
      console.error('GOOGLE_APPLICATION_CREDENTIALS environment variable not set.');
}
const db = admin.firestore();
db.settings({
  ignoreUndefinedProperties: true, // Optional: useful for preventing errors with undefined values
  databaseId: 'authenticator', // Uncomment and replace with your actual database ID if
});

// staging and production should look something more like this:
/*
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
db.settings({
  databaseId: 'authenticator', // Uncomment and replace with your actual database ID if
});

*/

// below is code that works for testing purposes
/*
console.log(db);
console.log("Firestore initialized");

async function addDocument() {
    const docRef = db.collection('testusers').doc('alovelace');
    await docRef.set({
         first: 'Ada',
         last: 'Lovelace',
         born: 1815
    });
    console.log('Document added successfully!');
}
addDocument().catch(console.error);

(async () => {
      const usersRef = db.collection('testusers');
      const snapshot = await usersRef.get();
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })();
*/
