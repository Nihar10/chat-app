// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDP9yXS66-IKbmBfIGqAiyKaIz9dX2g_to",
    authDomain: "slack-clone-4d443.firebaseapp.com",
    projectId: "slack-clone-4d443",
    storageBucket: "slack-clone-4d443.appspot.com",
    messagingSenderId: "429730450850",
    appId: "1:429730450850:web:dd40bdf3c28b00522236fb",
    measurementId: "G-V3Y9K33GL0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider, db };