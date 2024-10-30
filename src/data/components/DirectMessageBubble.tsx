import React from 'react'
import { DirectMessage } from '../interfaces.js'

export const DirectMessageBubble: React.FC<DirectMessage> = ({ text, sendingUser }) =>{
    
    const loggedInUser = localStorage.getItem('username')
    // const time = timestamp?.toString()
    // console.log(time)
    // console.log(timestamp)

    // onClick => navigate(chatrooms/${sendingUser.username})
    return <>
    {sendingUser === loggedInUser ? 
    <div className="right-message">
        <p>{sendingUser}</p>
        <p>{text}</p>
        </div>
    :
    <div className="left-message">
        <p>{sendingUser}</p>
        <p>{text}</p></div>
    }
    </>
}