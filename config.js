import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyBxWXeA8qdGwmUYMgymUC4R0kPaNQepccQ",
  authDomain: "team-voting-app-b4a13.firebaseapp.com",
  databaseURL: "https://team-voting-app-b4a13-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-b4a13",
  storageBucket: "team-voting-app-b4a13.appspot.com",
  messagingSenderId: "780266151272",
  appId: "1:780266151272:web:00ef23fd4f2d646fd6cadd"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
