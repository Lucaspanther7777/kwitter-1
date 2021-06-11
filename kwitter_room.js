
 var firebaseConfig = {
      apiKey: "AIzaSyDs0QFaecwZimJD2S1JTh56BrrpVWWRZBY",
      authDomain: "kwitter-8225f.firebaseapp.com",
      projectId: "kwitter-8225f",
      storageBucket: "kwitter-8225f.appspot.com",
      messagingSenderId: "684835189733",
      appId: "1:684835189733:web:1df2eb56f3e989fef5b50c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
