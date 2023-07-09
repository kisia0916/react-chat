import { Button } from '@mui/material'
import React from 'react'
import firebase from  "firebase/compat/app"
import {auth} from "../firebase.js"
function Sinin() {
    const sinInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div>
        <Button onClick={sinInWithGoogle}>
            グーグルでログインする
        </Button>
    </div>
  )
}

export default Sinin