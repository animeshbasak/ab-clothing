import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCB_rg__p6bHIWHsdyrlxw4VUFIq7uy9n8",
  authDomain: "abclothing-db.firebaseapp.com",
  projectId: "abclothing-db",
  storageBucket: "abclothing-db.appspot.com",
  messagingSenderId: "64726009429",
  appId: "1:64726009429:web:7b1e5e3dcca4bafa86f6dc",
  measurementId: "G-RXH9DE617M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
