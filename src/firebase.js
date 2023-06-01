// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqu6SubZR_1OiNdMDdkdDx0fSFnz8NBHY",
  authDomain: "bd-manillas.firebaseapp.com",
  projectId: "bd-manillas",
  storageBucket: "bd-manillas.appspot.com",
  messagingSenderId: "596481432746",
  appId: "1:596481432746:web:9e74d930c60a3237e804d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}