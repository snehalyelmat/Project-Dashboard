import firebase from "firebase/app";
import "firebase/firestore";

// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5tVrlw-4UfRF3MDeBoJTzt_jUB7t7Jog",
  authDomain: "project-dashboard-dd4ea.firebaseapp.com",
  databaseURL: "https://project-dashboard-dd4ea.firebaseio.com",
  projectId: "project-dashboard-dd4ea",
  storageBucket: "project-dashboard-dd4ea.appspot.com",
  messagingSenderId: "874564655726",
  appId: "1:874564655726:web:4544d9d4a9940ab208647f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;