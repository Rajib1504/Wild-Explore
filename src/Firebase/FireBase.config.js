// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWg1HTzo_EBwhkDmW1WDuaxtRhfVuVYc0",
  authDomain: "wild-explore.firebaseapp.com",
  projectId: "wild-explore",
  storageBucket: "wild-explore.firebasestorage.app",
  messagingSenderId: "276148867641",
  appId: "1:276148867641:web:38944e42d036ab97a633e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
