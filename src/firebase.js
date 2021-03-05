import firebase from "firebase";


var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQSBoBl7SxjGsA0WFEprxd2P76KFPQMdI",
  authDomain: "react-portfolio-79ac2.firebaseapp.com",
  projectId: "react-portfolio-79ac2",
  storageBucket: "react-portfolio-79ac2.appspot.com",
  messagingSenderId: "679660914835",
  appId: "1:679660914835:web:0906713a6e710f8da3a566"

  });
  
  var db = firebaseApp.firestore();

export { db };
