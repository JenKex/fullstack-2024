import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { channels } from "../../backendSrc/data/content.js"
import { ChannelListItem } from "../data/components/ChannelListItem.js"

const Home: React.FC = () => {
  // isLoggedIn är en placeholder -- borde senare kolla mot JWT-token värde i LocalStorage.
  const [isLoggedIn] = useState(false)
  
  const navigate = useNavigate()

  // function navigateLogin(){
  //   navigate()
  // }

  async function testGetAll(){
    const response = await fetch('/api/users')
    console.log(response)
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
        </nav>
        <div>Display chat here.
          <button onClick={testGetAll}>GetAll-test</button>
        </div>
      </main>
    </div>
  )
}

export default Home