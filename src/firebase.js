
//import {initializeApp} from "firebase/app";
//import 'firebase/compat/firestore';
//import {getAuth,GoogleAuthProvider} from "firebase/auth";
//import {getStorage} from "firebase/storage";
//import {getFirestore} from "firebase/firestore";
import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { seedDatabase } from "./seed";
import { getFirestore } from "firebase/firestore";
const firebaseconfig = {
	apiKey: "AIzaSyAqumCfYImK6tiXOm4vqIPn9ZFW-ueSOZw",
    authDomain: "disney-plus-d1f78.firebaseapp.com",
    projectId: "disney-plus-d1f78",
    storageBucket: "disney-plus-d1f78.appspot.com",
    messagingSenderId: "551557702486",
    appId: "1:551557702486:web:2b10c18728c500ecebacf7"
}

// initialize firebase
const firebaseApp = Firebase.initializeApp(firebaseconfig);
const db = Firebase.firestore()
seedDatabase(firebaseApp)
export {firebaseApp,db};