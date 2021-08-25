import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCbVDBDmzwlg-VKxkbao9NaeVRKxbKSHyA",
    authDomain: "clone-with-react-9eb74.firebaseapp.com",
    projectId: "clone-with-react-9eb74",
    storageBucket: "clone-with-react-9eb74.appspot.com",
    messagingSenderId: "358928003058",
    appId: "1:358928003058:web:96dd9b5c62770c10d6c56b",
    measurementId: "G-7BT5V5SZ3S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

