import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "whatsapp-2-89f1e.firebaseapp.com",
  projectId: "whatsapp-2-89f1e",
  storageBucket: "whatsapp-2-89f1e.appspot.com",
  messagingSenderId: "68392772778",
  appId: process.env.APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};