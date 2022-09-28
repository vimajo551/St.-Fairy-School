const firebaseConfig = {
    apiKey: "AIzaSyDojtQ2uKj3UjNIFbKU1mt7fnHeiz-8aIY",
    authDomain: "conversa-d2bb8.firebaseapp.com",
    databaseURL: "https://conversa-d2bb8-default-rtdb.firebaseio.com",
    projectId: "conversa-d2bb8",
    storageBucket: "conversa-d2bb8.appspot.com",
    messagingSenderId: "317353238289",
    appId: "1:317353238289:web:ec6e99b446b2e7bb24b6b0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADICIONE SEUS LINKS FIREBASE
  

function getData() { 
    firebase.database().ref("/"+roomName).on('value', function(snapshot) {
         document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
             childKey  = childSnapshot.key;
             childData = childSnapshot.val();
            if(childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
//Início do código

//Fim do código
 } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    })
    msg=document.getElementById("msg").value=""
}