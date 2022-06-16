import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import config from "./firebase.config";

const app = initializeApp(config);
const auth = getAuth(app);

export default {
  signUp: (email, password) =>
    createUserWithEmailAndPassword(auth, email, password),
  signIn: (email, password) =>
    signInWithEmailAndPassword(auth, email, password),
  signOut: () => signOut(auth),
  onChanged: (callback) => onAuthStateChanged(auth, callback),
};
