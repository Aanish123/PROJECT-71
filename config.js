import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyBjU1iIVfPPn_1AUeIhDQ_WYRyAXEDFgMI",
    authDomain: "e-ride-51911.firebaseapp.com",
    projectId: "e-ride-51911",
    storageBucket: "e-ride-51911.appspot.com",
    messagingSenderId: "1066336381322",
    appId: "1:1066336381322:web:f878f9579d31cbab500073"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();




