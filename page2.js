var firebaseConfig = {
    apiKey: "AIzaSyAGtYjlNKXdLVVB7uv-g1_trAJPFwphpmQ",
    authDomain: "socialdatabase-b9f43.firebaseapp.com",
    databaseURL: "https://socialdatabase-b9f43-default-rtdb.firebaseio.com",
    projectId: "socialdatabase-b9f43",
    storageBucket: "socialdatabase-b9f43.appspot.com",
    messagingSenderId: "516977061878",
    appId: "1:516977061878:web:631085326b6d5d76e721d7"
  };
  firebase.initializeApp(firebaseConfig);
  





  user_name = localStorage.getItem("user_name__var");
document.getElementById("welcome").innerHTML = "Welcome " + user_name + " !";

function addroom(){
  room_name = document.getElementById("inputadd").value;
  console.log(room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}






  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}

