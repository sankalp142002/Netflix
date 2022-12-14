import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBXG1VsvACfiWbssi6JT640hcyad0LrEBs",
    authDomain: "netflix-clone-de197.firebaseapp.com",
    projectId: "netflix-clone-de197",
    storageBucket: "netflix-clone-de197.appspot.com",
    messagingSenderId: "580461121821",
    appId: "1:580461121821:web:69669385f5ea4e044e51f4",
    measurementId: "G-KMCML05BQ8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth , db};