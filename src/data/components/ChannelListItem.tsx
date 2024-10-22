import React from "react"
import { Channel } from "../interfaces"

export const ChannelListItem: React.FC<Channel> = ({ name, isLocked }) =>{
    return <li>{name} {isLocked ? '🔒' : ''}</li>
}