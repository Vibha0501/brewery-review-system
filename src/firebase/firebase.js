// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1U2YSbiZrAktBLB-1Q27ygehYjDT_YuA",
  authDomain: "brewery-auth.firebaseapp.com",
  projectId: "brewery-auth",
  storageBucket: "brewery-auth.appspot.com",
  messagingSenderId: "619408103925",
  appId: "1:619408103925:web:353b5ffc1ebd2ff3d168bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
