import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { DirectMessageBubble } from "../data/components/DirectMessageBubble"
import { DirectMessage } from "../data/interfaces"

export const Chatroom: React.FC = () => {
    // Just nu trimmar detta pathname, gör ett getOneUsersDMs-call och filtrera på bara det som matchar 'sendingUser && receivingUser'. Gör styling och lägger klasser på det som tas emot.
    // useEffect get-ar chattmeddelanden baserat på path av useLocation.

    const [directMessageList, setDirectMessageList] = useState<DirectMessage[]>([])
    const [newText, setNewText] = useState<string>('')
    
    const LS_KEY = 'JWT_TOKEN'
    const {pathname} = useLocation()
    const path = pathname
    .slice(1)
    .split("/") 
    .slice(1);

    async function getDirectMessages(){
      const loggedInUser = localStorage.getItem('username')
      const token = localStorage.getItem(LS_KEY)
      if (token){
        const response: Response | null = await fetch(`/api/direct-messages/${loggedInUser}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : token ? token : ''
          }
        })
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
      else{
        console.log('Du är just nu gäst och har kommit in på en route du inte ska vara i. Du behöver logga in för att se dina meddelanden.')
      }
    }

    async function postMessage(text: string){
      console.log('Test.')
      const sendingUser: string = localStorage.getItem('username') || ''
      const receivingUser: string = path[0]
      const newMessage = { text, sendingUser, receivingUser }
      console.log(newMessage)
      await fetch('/api/direct-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
      })
      await getDirectMessages()
    }

    useEffect(() => {
      getDirectMessages()
    }, [])

    const navigate = useNavigate()

    return <div className="display">
    <header>
      <button onClick={() => navigate('/')}>Home</button>
    </header>
    <main className="chatroom-main">
      <div className="chatroom">
        {directMessageList.map((directMessage: DirectMessage) => (
          <DirectMessageBubble key={directMessage.messageId} {...directMessage}></DirectMessageBubble> 
        ))}
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} className="text-input"></input>
        <button onClick={() => postMessage(newText)}>Post</button>
      </div>
    </main>
  </div>
}