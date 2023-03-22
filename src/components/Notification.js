import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Notifications.css'
import { Sidebar } from './Chatting/Sidebar'
import { Chat } from './Chatting/Chat'
import Nav_Agencies from './Nav_Agencies'

const Notification = () => {
  return (

    <div>
      <Nav_Agencies />
      <NavBar />
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Notification
