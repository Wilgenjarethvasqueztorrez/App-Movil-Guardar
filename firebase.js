// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, getDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp1sa3f1vxqgpGbU9t9U8C3T5qAu6-VMQ",
    authDomain: "app-movil-guardar.firebaseapp.com",
    projectId: "app-movil-guardar",
    storageBucket: "app-movil-guardar.appspot.com",
    messagingSenderId: "949259872102",
    appId: "1:949259872102:web:faaefb8f725b2dfa070aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveClass = (name, time, section) =>
    addDoc(collection(db, "class"), { name, time, section });

export const getClass = () => getDocs(collection(db, 'class'))

export const onGetClass = () => console.log('onGetClass')

export {
    onSnapshot,
    collection,
    db
}

export const getClas = (id) => getDoc(doc(db, "class", id));

export const updateClas = (id, newFields) => updateDoc(doc(db, 'class', id), newFields);