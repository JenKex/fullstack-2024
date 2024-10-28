import React from "react"
import { Channel } from "../interfaces"
import { useNavigate } from "react-router-dom"

export const ChannelListItem: React.FC<Channel> = ({ name, isLocked }) =>{
    const navigate = useNavigate()

    function navigateLockedChannel(channel: string){
        if (localStorage.getItem('username')){
          navigate(`/channel/${channel}`)
        }
      }

    // onClick => navigate(channels/${channel.channel})

    // Gör en ternary operator för låsta kanaler och en för öppna kanaler. Låsta har lås-ikonen och valideringsfunktion.
    // PROBLEM: MouseEventHandler-problem när jag försöker passa en parameter.
    return <li onClick={() => navigateLockedChannel(name)}>{name} {isLocked ? '🔒' : ''}</li>
}