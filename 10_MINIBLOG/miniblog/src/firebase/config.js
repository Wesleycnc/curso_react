
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBF6bWG0c0elyfEjj2EHBAReGSHFRrRWek",
  authDomain: "miniblog-488f9.firebaseapp.com",
  projectId: "miniblog-488f9",
  storageBucket: "miniblog-488f9.appspot.com",
  messagingSenderId: "567246834422",
  appId: "1:567246834422:web:3e4eec0ea1f7aa5ab03ad7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }