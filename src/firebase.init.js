// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH09r1HtuWZa2VBlWzzwTh-h2NvSU_B7I",
    authDomain: "daily-deals-react.firebaseapp.com",
    projectId: "daily-deals-react",
    storageBucket: "daily-deals-react.appspot.com",
    messagingSenderId: "905743023577",
    appId: "1:905743023577:web:4e6fbadcacecf3debaedc8",
    measurementId: "G-66KDC3VQGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;