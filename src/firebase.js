import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDTPlmJdpwtPBkwHlhBJs2NyrrKBvHc3EE",
    authDomain: "react-slack-clone-45f75.firebaseapp.com",
    projectId: "react-slack-clone-45f75",
    storageBucket: "react-slack-clone-45f75.appspot.com",
    messagingSenderId: "333442730195",
    appId: "1:333442730195:web:dad3e1ec8cdeb77354ac26"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;