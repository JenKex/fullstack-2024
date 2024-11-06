import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ChannelMessageBubble } from "../data/components/ChannelMessageBubble.js"
import { ChannelMessage } from "../data/interfaces"

export const Channel: React.FC = () => {
    // Just nu trimmar detta pathname och gör ett getChannelMessages-call efter den path som tillhör kanalen. Gör styling och lägg klasser på det som tas emot.
    // useEffect hämtar chattmeddelanden baserat på det.

    const [channelMessageList, setChannelMessageList] = useState<ChannelMessage[]>([])
    const [newText, setNewText] = useState<string>('')

    const {pathname} = useLocation()
    const path = pathname
    .slice(1)
    .split("/") 
    .slice(1);

    async function getChannelMessages(){
      const response: Response | null = await fetch(`/api/channel-messages/${path}`)
      let channelMessages = await response.json()
      console.log('ChatRoom useEffect: ', channelMessages)
      setChannelMessageList(channelMessages)
    }

    async function postMessage(text: string){
      console.log('Test.')
      const user: string = localStorage.getItem('username') || 'Gäst'
      const channel: string = path[0]
      const newMessage = { text, user, channel }
      console.log(newMessage)
      await fetch('/api/channel-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
      })
      await getChannelMessages()
    }

    useEffect(() => {
      getChannelMessages()
    }, [])

    const navigate = useNavigate()

    return <div className="display">
    <header>
      {/* <div>Channels</div>
      <div>Users</div> */}
      <button onClick={() => navigate('/')}>Home</button>
    </header>
    <main className="channel-main">
      <div className="channel">
        {/* <div className="chat-messages"> */}
        {channelMessageList.map((channelMessage: ChannelMessage) => (
          <ChannelMessageBubble key={channelMessage.messageId} {...channelMessage}></ChannelMessageBubble> 
        ))}
        <input type="text" onChange={(e) => setNewText(e.target.value)} value={newText} className="channel-input"></input>
        <button onClick={() => postMessage(newText)}>Post</button>
      </div>
    </main>
  </div>
}