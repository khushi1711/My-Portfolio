
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDkLicYjUY2qD0EAJ-YfVJaoL6Tl8MK7aA",
  authDomain: "my-portfolio-f8d5e.firebaseapp.com",
  projectId: "my-portfolio-f8d5e",
  storageBucket: "my-portfolio-f8d5e.appspot.com",
  messagingSenderId: "244684094777",
  appId: "1:244684094777:web:d467ad680aac7ebfa43ce8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);