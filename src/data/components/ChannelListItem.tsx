import React from "react"
import { Channel } from "../interfaces"

export const ChannelListItem: React.FC<Channel> = ({ name, isLocked }) =>{
    // onClick => navigate(channels/${channel.channel})
    return <li>{name} {isLocked ? '🔒' : ''}</li>
}