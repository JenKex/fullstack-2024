import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { channels, directMessages } from "../../backendSrc/data/content.js"
import { ChannelListItem } from "../data/components/ChannelListItem.js"
// import { DirectMessage } from "../data/interfaces.js"
// import { DMListItem } from "../data/components/DMListItem.js"

const Home: React.FC = () => {

  // const LS_KEY = 'JWT_TOKEN'
  let chatrooms: string[] = []
  let [chatroomState, setChatroomState] = useState<string[]>([])

  // Tanke bakom den här funktionen:
  // 1: En tom lista skapas.
  // 2: Funktionen kollar om det finns en användare inloggad.
  // 3: Om det finns en användare, fetcha meddelandena för denna användare.
  // 4: Gå igenom listan och kolla om användaren skickar eller får meddelandet.
  // 5: Om användaren får meddelandet, lägg till den som skickar; om användaren skickar meddelandet, lägg till den som får.
  // 6: Inkludera ej dubletter.
  // PROBLEM: Behöver skriva om så att JWT-Verify körs på token, men vill inte ha en dedikerad get/protected utan hämta ifrån get/:id -- detta betyder dock att verify behöver köras ifrån frontend för att parsea ut användaren från JWT-token.
  // PROBLEM: Server-hämtning funkar inte -- kör ifrån hårdkodad data för att testa funktionen.

  useEffect(() => {
    //   async function renderChatrooms(): Promise<string[]>{
    //     let chatrooms: string[] = []
    //     let x: number = 0
    //     if (localStorage.getItem(LS_KEY)){
    //     const loggedInUser = localStorage.getItem('username')
    //     const response: Response | null = await fetch(`/api/direct-messages/${loggedInUser}`)
    //     if (response){
    //       const data = await response.json()
    //       for (let i = 0; i < data.length; i++){
    //         if (loggedInUser === data[i].sendingUser){
    //           if (chatrooms.includes(data[i].receivingUser)){

    //           }
    //           else{
    //             chatrooms[x] = data[i].receivingUser
    //             x++
    //           }
    //         }
    //         else if (loggedInUser === data[i].receivingUser){
    //           if (chatrooms.includes(data[i].sendingUser)){
    // 
    // }
    //           chatrooms[x] = data[i].sendingUser
    //           x++
    //         }
    //       }
    //     }
    //   }
    //   return chatrooms
    // }


    // renderChatrooms()

    function renderChatroomsTest() {
      let x: number = 0
      if (localStorage.getItem('username')) {
        const loggedInUser = localStorage.getItem('username')
          for (let i = 0; i < directMessages.length; i++) {
            console.log(chatrooms)
            if (loggedInUser === directMessages[i].sendingUser) {
              if (chatrooms.includes(directMessages[i].receivingUser)) {

              }
              else {
                chatrooms[x] = directMessages[i].receivingUser
                x++
              }
            }
            else if (loggedInUser === directMessages[i].receivingUser) {
              if (chatrooms.includes(directMessages[i].sendingUser)) {

              }
              else {
              chatrooms[x] = directMessages[i].sendingUser
              x++
            }
          }
        }
      }
      setChatroomState(chatrooms)
    }

    renderChatroomsTest()
  }, [])

  // isLoggedIn är en placeholder -- borde senare kolla mot JWT-token värde i LocalStorage.
  const [isLoggedIn] = useState(false)

  const navigate = useNavigate()

  // Tror inte att jag kan göra det här i en vanlig funktion, eftersom den inte kommer uppdateras med state-baserade variabler.
  // Måste hitta något sätt att .map-a ut och få det att nonchalera dubletter. 

  // function renderMessages(){
  //   let messageList: string[] = []
  //   let x = 0
  //   for (let i = 0; i < directMessages.length; i++){
  //     if (messageList.includes(directMessages[i].sendingUser)){

  //     }
  //     else{
  //       messageList[x] = directMessages[i].sendingUser
  //       x++
  //     }
  //     return messageList
  //   }
  // }

  // function navigateLogin(){
  //   navigate()
  // }

  async function testGetAll() {
    const response = await fetch('/api/users')
    const data = JSON.stringify(response)
    console.log(data)
  }

  return (
    <div className="display">
      <header>
        <div>Channels</div>
        <div>Users</div>

        {isLoggedIn ?
          <button>Log out</button> :
          <button onClick={() => navigate('/login')}>Log in</button>
        }
      </header>
      <main>
        <nav>
          <ul>
            {channels.map((channel) => (
              <ChannelListItem key={channel.name} {...channel}></ChannelListItem>
            ))}
          </ul>
          <ul>
            {chatroomState.map((username) => (
              <li onClick={() => navigate(`/chatroom/${username}`)} key={username}>{username}</li>
            ))}
          </ul>
        </nav>
        <div>Display chat here.
          <button onClick={testGetAll}>GetAll-test</button>
        </div>
      </main>
    </div>
  )
}

export default Home