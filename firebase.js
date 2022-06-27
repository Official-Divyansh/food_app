import firebase from "firebase";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDMw_f7MTi8924L6rV82yNbpAFT3Y4DJzU",
    authDomain: "restaurant-react-native-825de.firebaseapp.com",
    projectId: "restaurant-react-native-825de",
    storageBucket: "restaurant-react-native-825de.appspot.com",
    messagingSenderId: "858225738654",
    appId: "1:858225738654:web:71bd7768bc1c696cc44c8f"
  };
  
  
  !firebase.apps.length? firebase.initializeApp(firebaseConfig)  : firebase.app() 
  export default firebase

