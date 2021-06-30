import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByR9N76YtT7ZrKh93Ww0Xks6xZsrtuLMM",
  authDomain: "whatsapp-2-89f1e.firebaseapp.com",
  projectId: "whatsapp-2-89f1e",
  storageBucket: "whatsapp-2-89f1e.appspot.com",
  messagingSenderId: "68392772778",
  appId: "1:68392772778:web:15f9721e12b1d17ea05cd3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};