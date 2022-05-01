// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeUp5KrvGHsyXv-9cnm2rAUS_O4kaSAsU",
    authDomain: "books-inventory-42ccf.firebaseapp.com",
    projectId: "books-inventory-42ccf",
    storageBucket: "books-inventory-42ccf.appspot.com",
    messagingSenderId: "115261516964",
    appId: "1:115261516964:web:ca0aa02c84ef7514fc0a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;