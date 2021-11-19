import firebase from 'firebase/app';
import 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyD365RmTl2k7_7U_XppztI2r-pmxPwmeAY",
  authDomain: "dolbyio-legwork-demo.firebaseapp.com",
  databaseURL: "https://dolbyio-legwork-demo-default-rtdb.firebaseio.com/",
  projectId: "dolbyio-legwork-demo",
  storageBucket: "dolbyio-legwork-demo.appspot.com",
  messagingSenderId: "824149573948",
  appId: "1:824149573948:web:25f47f9cbed93f9d5b1e39",
  measurementId: "G-CRX91V0P75"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db };
