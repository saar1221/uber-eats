import firebase from "firebase";
const firebaseConfig = {
  "YOUR-API-KEY-AND-INFO"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
