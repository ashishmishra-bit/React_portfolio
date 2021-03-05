import firebase from "firebase";


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBA6PR5gNeLrF2JIDklt8fTK90eZJSHK0o",
    authDomain: "react-portfolio-53d91.firebaseapp.com",
    projectId: "react-portfolio-53d91",
    storageBucket: "react-portfolio-53d91.appspot.com",
    messagingSenderId: "771706007830",
    appId: "1:771706007830:web:38dfd10031d0c5dda6e037"
  });
  
  var db = firebaseApp.firestore();

export { db };
