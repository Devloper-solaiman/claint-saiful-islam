// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwtuur9iL5i8y6PCotvljhnPX2QlrOyJU",
    authDomain: "doctor-saiful-islam.firebaseapp.com",
    projectId: "doctor-saiful-islam",
    storageBucket: "doctor-saiful-islam.appspot.com",
    messagingSenderId: "9190600482",
    appId: "1:9190600482:web:c6c8dca8dfb3a9a1853f7b",
    measurementId: "G-SPNJCP3C4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
