import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQcjEGYTZobPMWuBt9pOFzkHLIe1I4Los",
    authDomain: "to-do-list-app-fb674.firebaseapp.com",
    databaseURL: "https://to-do-list-app-fb674.firebaseio.com",
    projectId: "to-do-list-app-fb674",
    storageBucket: "to-do-list-app-fb674.appspot.com",
    messagingSenderId: "891820757858"
  };
  firebase.initializeApp(config);

export {firebase};

export default firebase.database();