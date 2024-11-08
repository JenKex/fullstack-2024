import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const LS_KEY = 'JWT_TOKEN'

  const navigate = useNavigate()

  async function loginUser(username: string, password: string) {
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

  return (
    <div className="display">
      <header>
        <button onClick={() => navigate('/')}>Hem</button>
      </header>
      <main className="login-main">
        <div className="login-window">
          <label> Användarnamn:
            <input type="text" id="username-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </label>
          <label> Lösenord:
          <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </label>
          <button onClick={() => loginUser(username, password)}>Logga in</button>
        </div>
      </main>
    </div>
  )
}

export default LoginPage