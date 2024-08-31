// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVmRrgKov9S1amhmhtZJZ5kWtNaWesETU",
  authDomain: "react-notes-c8fe7.firebaseapp.com",
  projectId: "react-notes-c8fe7",
  storageBucket: "react-notes-c8fe7.appspot.com",
  messagingSenderId: "504345657327",
  appId: "1:504345657327:web:2a49b2919c34459ec4401a",
  measurementId: "G-JDE3K4SHTD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
