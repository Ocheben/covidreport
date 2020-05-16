import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDVH74X1sMcVHhO8cevBmx7rrGnpn3MP_I',
  authDomain: 'test-3dd0c.firebaseapp.com',
  databaseURL: 'https://test-3dd0c.firebaseio.com',
  projectId: 'test-3dd0c',
  storageBucket: 'test-3dd0c.appspot.com',
  messagingSenderId: '518890957561',
  appId: '1:518890957561:web:410f3cddca2593cb0ed028',
  measurementId: 'G-XBHPPGKNDH'
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
