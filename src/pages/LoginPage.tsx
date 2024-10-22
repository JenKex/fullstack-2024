import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const LS_KEY = 'JWT-TOKEN'

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
    const response = await fetch('/api/login', {
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
    }
  }

  return (
    <div className="display">
      <header>
        <div>Channels</div>
        <div>Users</div>
      </header>
      <main>
        <div>Display login window here.
          <input type="text" id="username-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={() => loginUser(username, password)}></button>
        </div>
      </main>
    </div>
  )
}

export default LoginPage