
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrEFHcy0VF7B248Xg9gCrTIWuDDh11UDg",
  authDomain: "kwitter-fc93c.firebaseapp.com",
  databaseURL: "https://kwitter-fc93c-default-rtdb.firebaseio.com",
  projectId: "kwitter-fc93c",
  storageBucket: "kwitter-fc93c.appspot.com",
  messagingSenderId: "208780532747",
  appId: "1:208780532747:web:229e28eb3c1f0265b37b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
