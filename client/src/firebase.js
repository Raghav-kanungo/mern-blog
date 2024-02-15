// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1b4b4.firebaseapp.com",
  projectId: "mern-blog-1b4b4",
  storageBucket: "mern-blog-1b4b4.appspot.com",
  messagingSenderId: "167713821653",
  appId: "1:167713821653:web:d693fa6cd2637ebdfca35c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
