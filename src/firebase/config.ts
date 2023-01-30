// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKRiiwaoA-Cf4ntNeTXvF8r7O1_2hbmtU",
  authDomain: "next-crud-c8970.firebaseapp.com",
  projectId: "next-crud-c8970",
  storageBucket: "next-crud-c8970.appspot.com",
  messagingSenderId: "31388928397",
  appId: "1:31388928397:web:4555c1f5c34f6d890a55c4",
  measurementId: "G-Y3VDHV37P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);