// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBagP2uCOUevtgkZ3-ioLbXYQJScpf-6c",
  authDomain: "catchthemall-c80cd.firebaseapp.com",
  projectId: "catchthemall-c80cd",
  storageBucket: "catchthemall-c80cd.appspot.com",
  messagingSenderId: "711670234179",
  appId: "1:711670234179:web:4e874d712eecd7ddc4a8f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);