var firebaseConfig = {
  apiKey: "AIzaSyAKBEtUkoVuiL_5ftb_KC8Bb-PDb-g6rMM",
  authDomain: "chat-web-20eef.firebaseapp.com",
  databaseURL: "https://chat-web-20eef-default-rtdb.firebaseio.com",
  projectId: "chat-web-20eef",
  storageBucket: "chat-web-20eef.appspot.com",
  messagingSenderId: "1092423367769",
  appId: "1:1092423367769:web:b79064d32c29682dac4548"
};

firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log(Room_names)
  row= "<div id=" +  Room_names  + " onclick='redirectToNewChatPage(this.id) ' > # "  + Room_names +"</div> <hr>"
  console.log(row)
  document.getElementById("output").innerHTML +=row
  //End code
  });});}
  getData();
document.getElementById("welcome").innerHTML= "Welcome " + localStorage.getItem("user_name") +" !"
 
function addRoomName() {
  room_name = document.getElementById("room_name").value
  

    firebase.database().ref("/").child(room_name).update

   ({
   purpose:"adding new user",
  
   })
    localStorage.setItem("room_name", room_name)
}

function send() {
    
   
}
function redirectToNewChatPage(room){
  window.location="chat.html"
  localStorage.setItem("room_name", room)
  }

  function logout(){
    window.location="first_page.html"
  }