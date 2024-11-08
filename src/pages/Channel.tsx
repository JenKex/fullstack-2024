import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ChannelMessageBubble } from "../data/components/ChannelMessageBubble.js"
import { ChannelMessage } from "../data/interfaces"

export const Channel: React.FC = () => {
    // Just nu trimmar detta pathname och gör ett getChannelMessages-call efter den path som tillhör kanalen. Gör styling och lägg klasser på det som tas emot.
    // useEffect hämtar chattmeddelanden baserat på det.

    const [channelMessageList, setChannelMessageList] = useState<ChannelMessage[]>([])
    const [newText, setNewText] = useState<string>('')

    // Använde ursprungligen useLocation() för att hämta de olika namnen på kanaler/chattanvändare. Detta ledde till problem med Å, Ä och Ö -- servern hämtas från addressen, försöker skicka 'Allm%3%4Ant' som request till servern, och eftersom kanalen 'Allm%3%4Ant' inte existerar misslyckas den med att hitta kanalen. useParams() kräver inte mycket kodomskrivning, klaffar med useNavigate och route-uppsättningen, och tolkar ut hela strängen. 

    // const {pathname} = useLocation()
    // const path = pathname
    // .slice(1)
    // .split("/") 
    // .slice(1);

    const {path} = useParams<{path: string}>()

    async function getChannelMessages(){
      const response: Response | null = await fetch(`/api/channel-messages/${path}`)
      let channelMessages = await response.json()
      console.log('ChatRoom useEffect: ', channelMessages)
      setChannelMessageList(channelMessages)
    }

    async function postMessage(text: string){
      console.log('Test.')
      const user: string = localStorage.getItem('username') || 'Gäst'
      const channel: string | undefined = path
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
      setNewText('')
    }

    useEffect(() => {
      getChannelMessages()
    }, [])

    const navigate = useNavigate()

    return <div className="display">
    <header>
      {/* <div>Channels</div>
      <div>Users</div> */}
      <button onClick={() => navigate('/')}>Hem</button>
    </header>
    <main className="channel-main">
      <div className="channel">
        {/* <div className="chat-messages"> */}
        {channelMessageList.map((channelMessage: ChannelMessage) => (
          <ChannelMessageBubble key={channelMessage.messageId} {...channelMessage}></ChannelMessageBubble> 
        ))}
        <input type="text" onChange={(e) => setNewText(e.target.value)} value={newText} className="channel-input"></input>
        <button onClick={() => postMessage(newText)}>Skicka kommentar</button>
      </div>
    </main>
  </div>
}