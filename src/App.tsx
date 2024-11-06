import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js'
import { Chatroom } from "./pages/Chatroom.js";
import { Channel } from './pages/Channel.js'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage/>}/>
        <Route path="chatroom/*" element={<Chatroom/>}/>
        <Route path="channel/*" element={<Channel/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
