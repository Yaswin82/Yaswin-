// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaOIAqqY3BgzRxuvoqM8lew17sohDwHxQ",
    authDomain: "project-9f744.firebaseapp.com",
    databaseURL: "https://project-9f744-default-rtdb.firebaseio.com",
    projectId: "project-9f744",
    storageBucket: "project-9f744.appspot.com",
    messagingSenderId: "463943343440",
    appId: "1:463943343440:web:ed4e0087f914148cd22055"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + "!";

function addroom (){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
          purpose:"adding room name()"  
    });
    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter-page.html";
}


    


    
