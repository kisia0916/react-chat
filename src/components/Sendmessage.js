import React, { useState } from 'react'
import {db,auth} from "../firebase"
import firebase from  "firebase/compat/app"
import { Input } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
function Sendmessage() {
    const [message,setMessage] = useState("")
    const sendMessage = (e)=>{
        e.preventDefault()
        if(message){
            const {uid,photoURL} = auth.currentUser
            db.collection("messages").add({
                text:message,
                photoURL,
                uid,
                createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            })
            setMessage("")
        }
    }

  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
                <Input 
                    placeholder='メッセージを入力' type='text' onChange={(e)=>setMessage(e.target.value)} value={message}
                    style={{
                        width: "78%",
                        fontSize: "15px",
                        fontWeight: "550",
                        marginLeft: "5px",
                        marginBottom: "-3px",
                    }}
                    />
                <SendIcon/>
            </div>
        </form>
    </div>
  )
}

export default Sendmessage