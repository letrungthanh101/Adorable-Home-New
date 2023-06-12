// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyDRlrzOPKwfN-k9mJuJRK_ptoHKiGuLNjY",
    authDomain: "adorablehome-d6b95.firebaseapp.com",
    databaseURL: "https://adorablehome-d6b95-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "adorablehome-d6b95",
    storageBucket: "adorablehome-d6b95.appspot.com",
    messagingSenderId: "589797277081",
    appId: "1:589797277081:web:5a63ac98273caad90ca708",
    measurementId: "G-E7PR8W4XNY"
  };
// const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
// export const db = firebase.firestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =  getFirestore(app);