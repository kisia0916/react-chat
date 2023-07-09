import firebase from  "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANgbcUKIFj6bAYsJnl2lIvW1gKce2FiMc",
    authDomain: "reactchat-41498.firebaseapp.com",
    projectId: "reactchat-41498",
    storageBucket: "reactchat-41498.appspot.com",
    messagingSenderId: "853398252702",
    appId: "1:853398252702:web:ace0a5204816cd59445f8f"
})
const db = firebaseApp.firestore()
const auth =firebase.auth()
export {db,auth}