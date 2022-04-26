// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDceJq0grItVQUkyExMXdSzVU6j0HsgoQA",
  authDomain: "volunteer-network-cf02a.firebaseapp.com",
  projectId: "volunteer-network-cf02a",
  storageBucket: "volunteer-network-cf02a.appspot.com",
  messagingSenderId: "1092906061308",
  appId: "1:1092906061308:web:e9b7bbf5bfa61187d13679",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
