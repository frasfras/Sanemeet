import firebase from 'firebase/app';
import 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyBnZRMojpITk9XE7QEIi7YCeDveGtxpVyo",
  authDomain: "dolbyio-classroom-demo-97584.firebaseapp.com",
  databaseURL: "https://dolbyio-classroom-demo-97584-default-rtdb.firebaseio.com/",
  projectId: "dolbyio-classroom-demo-97584",
  storageBucket: "dolbyio-classroom-demo-97584.appspot.com",
  messagingSenderId: "866391242955",
  appId: "1:866391242955:web:d00ee462d91d892f94c34e",
  measurementId: "G-YYR9BR3BWX"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db };
