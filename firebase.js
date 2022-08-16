// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9bH3x8VEeO_x4SaYN8zprVoJEUNU9iTM",
  authDomain: "fir-auth-55b22.firebaseapp.com",
  projectId: "fir-auth-55b22",
  storageBucket: "fir-auth-55b22.appspot.com",
  messagingSenderId: "771232497619",
  appId: "1:771232497619:web:d9fcda3ff611347667f926"
};

// Initialize Firebase
let app;
if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}