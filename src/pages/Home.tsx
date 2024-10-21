import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home: React.FC = () => {
  // isLoggedIn är en placeholder -- borde senare kolla mot JWT-token värde i LocalStorage.
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const navigate = useNavigate()

  // function navigateLogin(){
  //   navigate()
  // }

  return (
    <body>
      <header>
        <div>Channels</div>
        <div>Users</div>

        {isLoggedIn ?
          <button>Log out</button> :
          <button onClick={() => navigate('/Login')}>Log in</button>
        }
      </header>
      <main>
        <div>Display chat here.</div>
      </main>
    </body>
  )
}

export default Home