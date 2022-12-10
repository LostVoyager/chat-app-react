import React from 'react'

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
                <input type="file" name="" id=""/>
            </form>
            <p>Already registered? Log in</p>
        </div>
    </div>
  )
}
