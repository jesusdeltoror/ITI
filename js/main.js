import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAWAwl-YumLYXwFhDt7bV4wbwXHClrZ1_s",
    authDomain: "iti-game.firebaseapp.com",
    projectId: "iti-game",
    storageBucket: "iti-game.appspot.com",
    messagingSenderId: "198498851649",
    appId: "1:198498851649:web:3c220392f1ffff72059fc0",
    measurementId: "G-X53LND417N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        // ...
    } else {
        // User is signed out
        // ...
        console.log("disconected");
    }
});


