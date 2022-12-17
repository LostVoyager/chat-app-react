import React from 'react'
import Add from '../img/addAvatar.png'

export default function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" name="" id="" placeholder='display name'/>
                <input type="email" name="" id="" placeholder='email'/>
                <input type="password" name="" id="" placeholder='password'/>
                <input type="file" style={{display:"none"}} name="" id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt="" srcset="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already registered? Log in</p>
        </div>
    </div>
  )
}
