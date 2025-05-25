// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNG_QorimaHPHLPWTTbQ-6P2IdT8EZf54",
  authDomain: "blogging-website-202c6.firebaseapp.com",
  projectId: "blogging-website-202c6",
  storageBucket: "blogging-website-202c6.firebasestorage.app",
  messagingSenderId: "977559327282",
  appId: "1:977559327282:web:6a48a3d389524c870a622b",
  measurementId: "G-XL3JR78YJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user
        })
        .catch((error) => {
            console.log(error.message); 
        });

        return user;
}