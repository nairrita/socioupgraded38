import firebase from 'firebase'
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD6Q03g0wWa1NxRChvXxHX5AupaBNLUaXc",
  authDomain: "paint-part-3.firebaseapp.com",
  databaseURL: "https://paint-part-3.firebaseio.com",
  projectId: "paint-part-3",
  storageBucket: "paint-part-3.appspot.com",
  messagingSenderId: "480832082686",
  appId: "1:480832082686:web:b7a31332def45a7ad8cbaf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();