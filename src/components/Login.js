import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm]= useState(true);//using a state variable which uses useState() hook

  const toggleSigninForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'></img> 
      </div>
       <form className='absolute  p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 '>

         </input>)
        }
         <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 '> 

         </input>
         
         <input type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700 '>

         </input>
         <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign up"}</button> 
           <p className='py-4 cursor-pointer' onClick={toggleSigninForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>              
        </form> 
    </div>
  )
}

export default Login;