import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAo2_66J9nu4mT1zBNRRh3MPT6c9suGLCU",
    authDomain: "fireblogs-4339e.firebaseapp.com",
    projectId: "fireblogs-4339e",
    storageBucket: "fireblogs-4339e.appspot.com",
    messagingSenderId: "707152151040",
    appId: "1:707152151040:web:22e10d417331f803de0ee5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();