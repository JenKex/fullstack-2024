import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Funderar på att ha 'setUser' som en State-variabel efter inloggning, som kollas emot och ser vilka inloggningar man har. Men ioförsig, denna skulle behöva lagras lokalt på något sätt för att föras över till Home-sidan -- skulle kunna spara i localStorage, men det är hela syftet med JWT.
// Kolla books-exemplet!

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState('')
  const LS_KEY = 'JWT_TOKEN'

  const navigate = useNavigate()

  // function testValues() {
  //   console.log(username)
  //   console.log(password)
  // }

  async function loginUser(username: string, password: string) {
    // validateLogin
    // if (successful){
    //   useNavigate('/home')
    // }
    const data = { username, password }
    console.log('Skickar inloggningsuppgifter till servern: ', data)
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const jwt = await response.json()
    if (response.status === 200) {
      const token = jwt.jwt
      localStorage.setItem(LS_KEY, token)
      localStorage.setItem('username', username)
    }
    navigate('/')
  }

  // function loginUserTest(username: string){
  //   localStorage.setItem('username', username)
  // }

  return (
    <div className="display">
      <header>
        {/* <div>Channels</div>
        <div>Users</div> */}
        <button onClick={() => navigate('/')}>Hem.</button>
      </header>
      <main className="login-main">
        <div className="login-window">
          <p>Skriv ditt användarnamn och lösenord.</p>
          <label> Användarnamn:
            <input type="text" id="username-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </label>
          <label> Lösenord:
          <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </label>
          <button onClick={() => loginUser(username, password)}>Log in</button>
          {/* <button onClick={() => loginUserTest(username)}></button> */}
        </div>
      </main>
    </div>
  )
}

export default LoginPage