import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMY_kcdUpAGjQT8YwlLjlfVsxUmKzdR8c',
  authDomain: 'geo-burris.firebaseapp.com',
  databaseURL: 'https://geo-burris.firebaseio.com',
  projectId: 'geo-burris',
  storageBucket: 'geo-burris.appspot.com',
  messagingSenderId: '45255762986',
  appId: '1:45255762986:web:a9adb1962e724474928f53',
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
