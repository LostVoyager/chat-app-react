import React from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'


export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane Doe</span>
        <div className="chatIcons">
          <img src={Cam} alt="" srcset="" />
          <img src={Add} alt="" srcset="" />
          <img src={More} alt="" srcset="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
