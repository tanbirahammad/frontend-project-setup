import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// Credential Here
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGXsrjqgYor6MZPpoqebz-JULu1vCZxEY",
  authDomain: "car-doctor-50c04.firebaseapp.com",
  projectId: "car-doctor-50c04",
  storageBucket: "car-doctor-50c04.appspot.com",
  messagingSenderId: "1071874950605",
  appId: "1:1071874950605:web:3ce0b276ed040dfb6ff084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth(app);