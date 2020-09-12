import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBV0PbAGhNQIzVgPBfy3naFUT7vmLy00aM",
  authDomain: "e-clone-968d2.firebaseapp.com",
  databaseURL: "https://e-clone-968d2.firebaseio.com",
  projectId: "e-clone-968d2",
  storageBucket: "e-clone-968d2.appspot.com",
  messagingSenderId: "941628918384",
  appId: "1:941628918384:web:d3fa2576a75be5960a82b5",
  measurementId: "G-6SCNBGN4N3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
