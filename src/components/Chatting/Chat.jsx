import React from 'react'
import { Messages } from './Messages'
import {Input} from './Input'
export const Chat = () => {
  return (
    <div className="chat">
    <div className="chatInfo">
        <span>Steve</span>
        <div className="chatIcons">
            <img src="" alt="Camera" />
            <img src="" alt="Chat" />
            <img src="" alt="Video" />

        </div>
        
    </div>
    <Messages />
    <Input />
    </div>
  )
}
 