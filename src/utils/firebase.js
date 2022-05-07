// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANCIkmHzlfBlyYCNjKDJXC1GTSrlzSF-E",
  authDomain: "fir-contact-app-2359d.firebaseapp.com",
  databaseURL: "https://fir-contact-app-2359d-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-2359d",
  storageBucket: "fir-contact-app-2359d.appspot.com",
  messagingSenderId: "1066306256988",
  appId: "1:1066306256988:web:e13c2010bb7add08f02699"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

