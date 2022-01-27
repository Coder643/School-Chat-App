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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  console.log("I am here");
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "school_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) { 
     document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) { 
         childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "school_page.html";
}

function logOut() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
