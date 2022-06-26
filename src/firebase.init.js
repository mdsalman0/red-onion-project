// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdar6gxtLW4UzRyP5UgafqC_Wvgupc-Wo",
  authDomain: "red-onion-project-1bc32.firebaseapp.com",
  projectId: "red-onion-project-1bc32",
  storageBucket: "red-onion-project-1bc32.appspot.com",
  messagingSenderId: "1036172237975",
  appId: "1:1036172237975:web:30db42219218a90fdd5dd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
