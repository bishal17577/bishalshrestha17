// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
 getAuth
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {
 getFirestore
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyDJLnUB8XnXWPEtSRAMuQr9ASmD16HLIJc",
 authDomain: "bishalshrestha17-de676.firebaseapp.com",
 projectId: "bishalshrestha17-de676",
 storageBucket: "bishalshrestha17-de676.firebasestorage.app",
 messagingSenderId: "631628771230",
 appId: "1:631628771230:web:389c6430535f6a46b6708f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);