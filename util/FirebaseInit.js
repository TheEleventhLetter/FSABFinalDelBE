// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiCJTEiX5ifGj2w43m2058VCydr216SWs",
  authDomain: "destinationlist-d51f1.firebaseapp.com",
  projectId: "destinationlist-d51f1",
  storageBucket: "destinationlist-d51f1.appspot.com",
  messagingSenderId: "116226783401",
  appId: "1:116226783401:web:2010cea0e76db796ccd1b8",
  measurementId: "G-9FQWTQJLHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);