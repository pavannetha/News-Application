// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLWD77zKtuvYWdHRDeBLCw95YSBd54Tss",
  authDomain: "news-application-6a6e0.firebaseapp.com",
  projectId: "news-application-6a6e0",
  storageBucket: "news-application-6a6e0.firebasestorage.app",
  messagingSenderId: "5271474492",
  appId: "1:5271474492:web:29c70b4aedd6f849b60e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)