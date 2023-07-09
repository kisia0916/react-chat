import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'

function Sinout() {
  return (  
    <div className='header'>
        <Button onClick={()=>{auth.signOut()}} style={{color:"white",fontSize:"15px"}}>ログアウトする</Button>
    </div>
  )
}

export default Sinout