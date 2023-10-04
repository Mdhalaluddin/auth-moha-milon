// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1AoiZFWvLA1NUDV8-Yy-3w6TKvat4jQ",
  authDomain: "auth-moha-milon-183cf.firebaseapp.com",
  projectId: "auth-moha-milon-183cf",
  storageBucket: "auth-moha-milon-183cf.appspot.com",
  messagingSenderId: "250529397002",
  appId: "1:250529397002:web:ba92e65d4671385e43e2f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;