import * as admin from 'firebase-admin';

// const serviceAccount = require('path/to/firebase-adminsdk.json');
const serviceAccount = require('src\environments\client_secret_309525837536-er5t0ivbftkvli42m9isitb700gp9950.apps.googleusercontent.com.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ap-frontend23.firebaseapp.com',
});
