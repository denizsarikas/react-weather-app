// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXClY6Mpto2cN7Y_kthTZhyKMs3mZmlIo",
  authDomain: "city-weather-app-b088b.firebaseapp.com",
  projectId: "city-weather-app-b088b",
  storageBucket: "city-weather-app-b088b.appspot.com",
  messagingSenderId: "85668434564",
  appId: "1:85668434564:web:182e0855dab83fe60ae8d1",
  measurementId: "G-F98FG0DFTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);