import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCitszVpHGC-7axx9tgSz4mv_HjACnQ7Uo",
    authDomain: "turnout-53438.firebaseapp.com",
    databaseURL: "https://turnout-53438.firebaseio.com",
    projectId: "turnout-53438",
    storageBucket: "turnout-53438.appspot.com",
    messagingSenderId: "289774025988"
  };
  
export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events') 