import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">React Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John Doe</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
