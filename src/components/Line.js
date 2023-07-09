import React, { useEffect, useState } from 'react'
import Sinout from './Sinout'
import {db,auth} from "../firebase"
import Sendmessage from './Sendmessage'
function Line() {
    const [messages,setMessage] = useState([])
    useEffect(()=>{
        db.collection("messages").orderBy("createdAt").limit(50).onSnapshot((snap)=>{
            setMessage(snap.docs.map((doc)=> doc.data()))
        })
    },[])
  return (
    <div>
        {console.log(messages)}
        <Sinout/>
        <div className='msgs'>
            {messages.map(({id,text,photoURL,uid})=>(
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent":"received"}`}>
                        <img src={photoURL} alt=''/>
                        <p>{text}</p>
                    </div>
                </div>
            ))/*jsx記法だどアロー関数とかの｛｝が（）になる*/}
        </div> 
        <Sendmessage/>
    </div>
  )
}

export default Line