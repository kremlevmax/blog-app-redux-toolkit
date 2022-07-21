// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX7Qlf66_OZPHc7K-SDBkYkrxbBz2Cj94",
  authDomain: "kremlev-blog.firebaseapp.com",
  projectId: "kremlev-blog",
  storageBucket: "kremlev-blog.appspot.com",
  messagingSenderId: "486455619354",
  appId: "1:486455619354:web:97bbd43bab0a0eed98c6a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
