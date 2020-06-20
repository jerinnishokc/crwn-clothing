import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCoGHIy-PHNH9o5V7E9J7auQawpXh0b-Do',
  authDomain: 'crwn-db-474cf.firebaseapp.com',
  databaseURL: 'https://crwn-db-474cf.firebaseio.com',
  projectId: 'crwn-db-474cf',
  storageBucket: 'crwn-db-474cf.appspot.com',
  messagingSenderId: '371313621069',
  appId: '1:371313621069:web:268dfd3bd3dde6a17b8404',
  measurementId: 'G-X193QMXPF9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
