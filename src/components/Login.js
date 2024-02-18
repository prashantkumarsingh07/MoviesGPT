import React, { useState,useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm]= useState(true);//using a state variable which uses useState() hook

  const [errorMessage, setErrorMessage] =useState(null);
  
  
  const email= useRef(null);
  const password= useRef(null);

  const handleButtonClick=()=>{
    //First thing we do is Validate the form data.

     

    // console.log(email.current.value );
    // console.log(password.current.value );

   const message= checkValidData(email.current.value,password.current.value);

   setErrorMessage(message);

   // Sign In / Sign Up




  };

  const toggleSigninForm=()=>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'></img> 
      </div>
       <form onSubmit={(e)=>e.preventDefault()}className='absolute  p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign up"}</h1>
        {!isSignInForm && (<input 
        
        type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 '>
  
         </input>)
        }
         <input
          ref={email}
          type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 '> 

         </input>
         
         <input
          ref={password} 
         type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700 '>

         </input>
         
         <p className='text-red-500 font-bold text-lg py-2'>{errorMessage} </p>

         <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign up"}</button> 
           <p className='py-4 cursor-pointer' onClick={toggleSigninForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>              
        </form> 
    </div>
  )
}

export default Login;