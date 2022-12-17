import React from 'react'
import Add from '../img/addAvatar.png'

export default function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" name="" id="" placeholder='email'/>
                <input type="password" name="" id="" placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>New around here? Register</p>
        </div>
    </div>
  )
}
