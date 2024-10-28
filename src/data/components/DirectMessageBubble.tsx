import React from 'react'
import { DirectMessage } from '../interfaces.js'

export const DirectMessageBubble: React.FC<DirectMessage> = ({ text, receivingUser, sendingUser, timestamp }) =>{
    
    const loggedInUser = localStorage.getItem('username')

    // onClick => navigate(chatrooms/${sendingUser.username})
    return <>
    {sendingUser === loggedInUser ? 
    <div className="right-message">{text}</div>
    :
    <div className="left-message">{text}</div>
    }
    </>
}