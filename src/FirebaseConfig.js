// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEXULf-SYHYv7oRoXL98GNDVQqKWli-30",
  authDomain: "newai-4158b.firebaseapp.com",
  projectId: "newai-4158b",
  storageBucket: "newai-4158b.appspot.com",
  messagingSenderId: "481783689231",
  appId: "1:481783689231:web:4dbe9148ed3002a11cb37a",
  measurementId: "G-BP7YEGLJ8Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
