import React from 'react'
import logopng from '../IMAGES/logo_pavan_news-removebg-preview.png'
import rightbg from '../IMAGES/depositphotos_71918151-stock-illustration-phone-on-news-illustration-removebg-preview.png'
// import bgimg from '../IMAGES/Best-news-apps-removebg.png'
import {signInWithPopup} from "firebase/auth"
import {auth,googleProvider} from "../firebase/setup"
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

  const navigate = useNavigate()

  const googleSignin = async() => {
    try{
      await signInWithPopup(auth,googleProvider)
      auth.currentUser && navigate("/")
    }catch(err){
      console.error(err)
    }
  }
  // console.log(auth)
  return (
    <div>
      <div className='sign-in-page grid grid-cols-2 bg-no-repeat bg-cover bg-slate-700 h-screen'>
        <div className='left-section flex justify-center items-center'>
            <div className='inner-left-section flex flex-col items-center bg-slate-700 h-60 w-60 bg- rounded-md'>
              <h2 className='font-bold text-gray-300 text-center p-3'>SIGN IN</h2>
              <img src={logopng} className='h-10 m-8' alt='...'/>
              <button onClick={googleSignin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              SIGN-IN
              </button>
            </div>
        </div>
        <div>
          <img className='h-screen' src={rightbg} alt='..'/>
        </div>
      </div>
    </div>
  )
}
