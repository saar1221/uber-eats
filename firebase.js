import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCCHj8bZG0uK5IS489g2Vr79vaiHYN0EoM",
  authDomain: "uber-clone-react-native-saar.firebaseapp.com",
  projectId: "uber-clone-react-native-saar",
  storageBucket: "uber-clone-react-native-saar.appspot.com",
  messagingSenderId: "81438394927",
  appId: "1:81438394927:web:756ff2987b5eee86ccd4da",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
