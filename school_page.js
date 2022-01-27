const firebaseConfig = {
    apiKey: "AIzaSyAB4mXQg4-jZRXMUazv9VhC2Cpx_24Ku1Q",
    authDomain: "schoolchatapp-dfd0c.firebaseapp.com",
    databaseURL: "https://schoolchatapp-dfd0c-default-rtdb.firebaseio.com",
    projectId: "schoolchatapp-dfd0c",
    storageBucket: "schoolchatapp-dfd0c.appspot.com",
    messagingSenderId: "555488652618",
    appId: "1:555488652618:web:789c82ac66e4e6e04765b3"
  };
  
  firebase.initializeApp(firebaseConfig);

  


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }

 getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }