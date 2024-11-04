import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Channel } from "../data/interfaces.js"
// import { channels } from "../../backendSrc/data/content.js"
import { ChannelListItem } from "../data/components/ChannelListItem.js"

const Home: React.FC = () => {

  const LS_KEY = 'JWT_TOKEN'
  // let chatrooms: string[] = []
  let [channelState, setChannelState] = useState<Channel[]>([])
  let [chatroomState, setChatroomState] = useState<string[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] =  useState<string>('')


  // Tanke bakom den här funktionen:
  // 1: En tom lista skapas.
  // 2: Funktionen kollar om det finns en användare inloggad.
  // 3: Om det finns en användare, fetcha meddelandena för denna användare.
  // 4: Gå igenom listan och kolla om användaren skickar eller får meddelandet.
  // 5: Om användaren får meddelandet, lägg till den som skickar; om användaren skickar meddelandet, lägg till den som får.
  // 6: Inkludera ej dubletter.
  // PROBLEM: Behöver skriva om så att JWT-Verify körs på token, men vill inte ha en dedikerad get/protected utan hämta ifrån get/:id -- detta betyder dock att verify behöver köras ifrån frontend för att parsea ut användaren från JWT-token.
  // PROBLEM: Server-hämtning funkar inte -- kör ifrån hårdkodad data för att testa funktionen.

  // PROBLEM: Kan förhindra dubbelrendering med useRef, en bool, variabel eller liknande för att se till att funktionen inte försöker ladda två gånger och hämta data som får den att parsea fel data, men försöker göra best practices och initialisera klient+hämta samlingar istället. Skriver om detta 2024-11-01, och implementerar då också JWT-verifiering. 

  async function renderChannels(): Promise<void>{
    let channels: Channel[] = []
    let x: number = 0
    const response: Response | null = await fetch('/api/channels/')
    if (response.ok){
      const data = await response.json()
      console.log('Home.tsx, renderChannels, useEffect', data)
      for (let i = 0; i < data.length; i++) {
        channels[x] = data[i]
        x++
      }
    }
    setChannelState(channels)
  }

  async function renderChatrooms(): Promise<void> {
    let chatrooms: string[] = []
    let x: number = 0
    const token = localStorage.getItem(LS_KEY)
    if (token) {
      setIsLoggedIn(true)
      const loggedInUser = localStorage.getItem('username') || ''
      setCurrentUser(loggedInUser)
      console.log(loggedInUser)
      const response: Response | null = await fetch(`/api/direct-messages/${loggedInUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : token ? token : ''
        }
      })
      if (response.ok) {
        const data = await response.json()
        console.log('Home.tsx, renderChatrooms, useEffect', data)
        for (let i = 0; i < data.length; i++) {
          if (loggedInUser === data[i].sendingUser) {
            if (chatrooms.includes(data[i].receivingUser)) {

            }
            else {
              chatrooms[x] = data[i].receivingUser
              x++
            }
          }
          else if (loggedInUser === data[i].receivingUser) {
            if (chatrooms.includes(data[i].sendingUser)) {

            }
            else {
              chatrooms[x] = data[i].sendingUser
              x++
            }
          }
        }
        setChatroomState(chatrooms)
      }
    }
    else{
      return
    }
  }

  useEffect(() => {
      renderChannels()
      renderChatrooms()
  }, [])

  const navigate = useNavigate()

  function logOut() {
    localStorage.removeItem(LS_KEY)
    localStorage.removeItem('username')
    setChatroomState([])
    setIsLoggedIn(false)
  }

  return (
    <div className="display">
      <header>

        {isLoggedIn ?
        <div>
        <h2>Welcome, {currentUser}</h2>
          <button onClick={() => logOut()}>Log out</button>
          </div> :
          <div>
          <h2>Welcome, guest</h2>
          <button onClick={() => navigate('/login')}>Log in</button>
          </div>
        }
      </header>
      <main>
        <nav>
          <ul> <b>Channels</b>
            {channelState.map((channel) => (
              <ChannelListItem key={channel.name} {...channel}></ChannelListItem>
            ))}
          </ul>
          <ul> {isLoggedIn ? <b>Users</b> : <b>No DMs detected. Log in to chat!</b>}
            {chatroomState.map((username) => (
              <li onClick={() => navigate(`/chatroom/${username}`)} key={username}>{username}</li>
            ))}
          </ul>
        </nav>
        <div className="front-page-blurb">Welcome to NySpace! Join the conversation in one of our forum channels,
          or just find your favorite folks and chat them up!
        </div>
      </main>
    </div>
  )
}

export default Home