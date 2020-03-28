import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnp5lnKBn_7PZUsBzEaeNUGNEbjChfh78",
    authDomain: "cloth-shop-6284f.firebaseapp.com",
    databaseURL: "https://cloth-shop-6284f.firebaseio.com",
    projectId: "cloth-shop-6284f",
    storageBucket: "cloth-shop-6284f.appspot.com",
    messagingSenderId: "47352024932",
    appId: "1:47352024932:web:38ab8cd42c59b20beeb471",
    measurementId: "G-KDGPSF25H6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;