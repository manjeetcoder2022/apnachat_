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
user_name=localStorage.getItem("user_name")
sub=localStorage.getItem("subject_name")
room_name=localStorage.getItem("room_name")

document.getElementById("displaying_room_name").innerHTML=room_name
document.getElementById("displaying_sub_name").innerHTML=sub
document.getElementById("displaying_sub_teacher_name").innerHTML=user_name

function logout(){
   
    localStorage.removeItem("room_name")
    window.location="index.html"
}
function send(){
    document.getElementById("share").style.display="block"
    msg= document.getElementById("msg").value 
     firebase.database().ref(room_name).push({
        message:msg,
        like:0,
        user_name: user_name
     })
}
function login(){
    user_name_fetch = localStorage.getItem("user_name")
    subject_name_fetch= localStorage.getItem("subject_name")
    room_name_fetch = localStorage.getItem("room_name")
    a = "mailto:EnterYourGroupName@gmail.com?body=Your " + subject_name_fetch + " Teacher " + user_name_fetch +  " Requesting to you join the chat Session by Open APNA CHAT website link here" + window.location.href  +   " and Enter Room name = " + room_name_fetch
    document.getElementById("share").href = a
}