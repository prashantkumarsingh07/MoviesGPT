// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsfToEitS0a63uo3yfFm9EnKC94L79_vY",
  authDomain: "moviesgpt-b2f88.firebaseapp.com",
  projectId: "moviesgpt-b2f88",
  storageBucket: "moviesgpt-b2f88.appspot.com",
  messagingSenderId: "134364567842",
  appId: "1:134364567842:web:65eb1388d0c5da6e90ad7b",
  measurementId: "G-TRZWXL3KYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);