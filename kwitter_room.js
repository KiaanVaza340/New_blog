// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCUQFOaPYfOlffSHUIvv2X8Vuda2L6ScbY",
      authDomain: "project-93-e7b73.firebaseapp.com",
      databaseURL: "https://project-93-e7b73-default-rtdb.firebaseio.com",
      projectId: "project-93-e7b73",
      storageBucket: "project-93-e7b73.appspot.com",
      messagingSenderId: "208443275579",
      appId: "1:208443275579:web:8ed6e44fc6e5e1177c1f1e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function add_room() {
          room_name = document.getElementById("room_name").value;

          localStorage.setItem("roomname",room_name);

          window.location="kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("room_name - "+Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}