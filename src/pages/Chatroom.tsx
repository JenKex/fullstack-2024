import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const Chatroom: React.FC = () => {
    // Att göra: Trimma pathname, gör ett getOneUsersDMs-call och filtrera på bara det som matchar 'sendingUser == loggedInUser || pathname && receivingUser == loggedInUser || pathname. Gör styling och lägg klasser på det som tas emot.

    const navigate = useNavigate()

    const {pathname} = useLocation()
    const path = pathname
    .slice(1)
    .split("/") 
    .slice(1);


    return <div className="display">
    <header>
      <div>Channels</div>
      <div>Users</div>
      <button onClick={() => navigate('/')}>Home</button>
    </header>
    <main>
      <div>Display {path} chat here.</div>
    </main>
  </div>
}