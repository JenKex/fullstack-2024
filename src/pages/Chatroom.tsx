import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { DirectMessageBubble } from "../data/components/DirectMessageBubble"
import { DirectMessage } from "../data/interfaces"

export const Chatroom: React.FC = () => {
    // Att göra: Trimma pathname, gör ett getOneUsersDMs-call och filtrera på bara det som matchar 'sendingUser == loggedInUser || pathname && receivingUser == loggedInUser || pathname. Gör styling och lägg klasser på det som tas emot.
    // Lägg in en useEffect som get-ar chattmeddelanden baserat på antingen path av useLocation eller passade props.

    const [directMessageList, setDirectMessageList] = useState<DirectMessage[]>([])

    const {pathname} = useLocation()
    const path = pathname
    .slice(1)
    .split("/") 
    .slice(1);

    useEffect(() => {
      async function getDirectMessages(){
        const loggedInUser = localStorage.getItem('username')
        const response: Response | null = await fetch(`/api/direct-messages/${loggedInUser}`)
        let directMessages = await response.json()
        let trimmedDirectMessages: DirectMessage[] = []
        let x: number = 0
        for (let i = 0; i < directMessages.length; i++){
          if (directMessages[i].sendingUser == loggedInUser && directMessages[i].receivingUser == path || directMessages[i].receivingUser == loggedInUser && directMessages[i].sendingUser == path){
            trimmedDirectMessages[x] = directMessages[i]
            x++
          }
        }
        console.log('ChatRoom useEffect: ', directMessages)
        setDirectMessageList(trimmedDirectMessages)
      }

      getDirectMessages()
    }, [])

    const navigate = useNavigate()

    return <div className="display">
    <header>
      {/* <div>Channels</div>
      <div>Users</div> */}
      <button onClick={() => navigate('/')}>Home</button>
    </header>
    <main>
      <div className="chatroom">
        {/* <div className="chat-messages"> */}
        {directMessageList.map((directMessage: DirectMessage) => (
          <DirectMessageBubble key={directMessage.messageId} {...directMessage}></DirectMessageBubble> 
        ))}
          {/* <DirectMessageBubble sendingUser='johnDoe' text='Hey!' receivingUser='Mary'></DirectMessageBubble>
          <DirectMessageBubble sendingUser='Mary' text="What's up?!" receivingUser='johnDoe'></DirectMessageBubble>
          <DirectMessageBubble sendingUser='johnDoe' text="You don't have to shout at me :(" receivingUser='Mary'></DirectMessageBubble> */}
        {/* </div> */}
      </div>
    </main>
  </div>
}