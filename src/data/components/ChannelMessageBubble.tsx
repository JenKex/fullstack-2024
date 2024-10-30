import React from 'react'
import { ChannelMessage } from '../interfaces.js'

export const ChannelMessageBubble: React.FC<ChannelMessage> = ({ text, user }) =>{

    // onClick => navigate(chatrooms/${sendingUser.username})
    return <div className="channel-message">
        <h4><b>{user}</b></h4>
        <p>{text}</p>
    </div>
}