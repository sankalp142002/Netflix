import React, { useState } from 'react'
import "../CSS/Login.css"
import Signup from './Signup'

function Login() {
    const[signIn,setSignIn] = useState(false)
  return (
    <div className='login'>
      <div className='login-background'>
      <img 
      className='login-logo'
      src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      alt='Netflix logo'
      />
      <button onClick={() => setSignIn(true)} className='login-button'>
        Sign In
      </button>
      <div className='gradient' />
      </div>
      <div className='body'>
        {signIn ? (
            <Signup />
        ) : 
        (
<>
        <h1>Unlimited movies, TV shows and more!</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='input'>
            <form>
                <input type='email' placeholder='Email Address' />
                <button onClick={() => setSignIn(true)} className='getstarted'>GET STARTES</button>
            </form>
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default Login


