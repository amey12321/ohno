var firebaseConfig = {
      apiKey: "AIzaSyALvcWwpKd7tcAjLif9WRUv1wVC2dWT3GE",
      authDomain: "kwitter-twitter-6fb42.firebaseapp.com",
      databaseURL: "https://kwitter-twitter-6fb42-default-rtdb.firebaseio.com",
      projectId: "kwitter-twitter-6fb42",
      storageBucket: "kwitter-twitter-6fb42.appspot.com",
      messagingSenderId: "683236015741",
      appId: "1:683236015741:web:8c9d235b5039fa62677b14"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
