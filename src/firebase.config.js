import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5bQNluL9kX5lcXdvW-Cad1V6v7ZjMgWk",
  authDomain: "react-authentification-4a7cf.firebaseapp.com",
  projectId: "react-authentification-4a7cf",
  storageBucket: "react-authentification-4a7cf.appspot.com",
  messagingSenderId: "589010364646",
  appId: "1:589010364646:web:3a8023bc268f6af811f327",
  measurementId: "G-6B7517K9T9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
