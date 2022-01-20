const config = {
    apiKey: "AIzaSyBrEFHcy0VF7B248Xg9gCrTIWuDDh11UDg",
    authDomain: "kwitter-fc93c.firebaseapp.com",
    databaseURL: "https://kwitter-fc93c-default-rtdb.firebaseio.com",
    projectId: "kwitter-fc93c",
    storageBucket: "kwitter-fc93c.appspot.com",
    messagingSenderId: "208780532747",
    appId: "1:208780532747:web:229e28eb3c1f0265b37b0e"
  };
//ADD YOUR FIREBASE LINKS
firebase.initializeApp(config);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}