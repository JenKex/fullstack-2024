import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <body>
      <header>
        <div>Channels</div>
        <div>Users</div>
      </header>
      <main>
        <div>Display login window here.
          <input type="text" id="username-input"></input>
          <input type="text" id="password-input"></input>
        </div>
      </main>
    </body>
  )
}

export default LoginPage