import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWSAn3dFiwPhpiLtCFvtCpWnxqfCJ2pF0",
    authDomain: "web-style-tech.firebaseapp.com",
    projectId: "web-style-tech",
    storageBucket: "web-style-tech.appspot.com",
    messagingSenderId: "166346333746",
    appId: "1:166346333746:web:37307917c0d393722fa62b",
    measurementId: "G-BMZ1FJ8H7B"
};


const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)