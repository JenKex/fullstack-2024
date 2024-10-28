import React from 'react'
import { ChannelMessage } from '../interfaces.js'

export const ChannelMessageBubble: React.FC<ChannelMessage> = ({ text, user }) =>{

    // onClick => navigate(chatrooms/${sendingUser.username})
    return <div>
        {user}: {text}
    </div>
}