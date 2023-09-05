import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAAejbYn7gcPX_coeEahfCBpGxYXQD-K1w",
    authDomain: "tarefasplus-45dd1.firebaseapp.com",
    projectId: "tarefasplus-45dd1",
    storageBucket: "tarefasplus-45dd1.appspot.com",
    messagingSenderId: "530614867727",
    appId: "1:530614867727:web:1266c91703aa874dcf507a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }