// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkRHx3RwoLMZcD9-s7ktRhgJ7LOUVUmqw",
  authDomain: "exfirebase-11c55.firebaseapp.com",
  projectId: "exfirebase-11c55",
  storageBucket: "exfirebase-11c55.firebasestorage.app",
  messagingSenderId: "589492174582",
  appId: "1:589492174582:web:d4dd49bb62b9fab359f6d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//const provider = new GoogleAuthProvider();

export { auth };