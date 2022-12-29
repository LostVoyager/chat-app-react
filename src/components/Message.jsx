import React from 'react'

export default function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/9588984/pexels-photo-9588984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello world!</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}
