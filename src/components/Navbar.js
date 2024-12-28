import React from 'react'
import logopng from '../IMAGES/logo_pavan_news-removebg-preview.png'
import "../CSS/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../firebase/setup'
import { signOut } from 'firebase/auth'

export default function Navbar() {

  const navigate =useNavigate()

  const logOut = async() => {
    try{
      await signOut(auth)
      navigate("/")
    }
    catch(err){
      console.error(err)
    }

  }

  return (
    <div>
      <div className='navbar bg-slate-700'>
        <div className='flex justify-between'>
            <img className='h-12 ml-7' src={logopng} alt='..'/>
        </div>
        <div className='flex justify-evenly'>
           {auth.currentUser ? <button onClick={logOut} className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Log Out</button>:<Link to='./signin'>
            <button className='text-white mt-1 font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>SignIn</button>
           </Link>}
            <button className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Home</button>
            <button className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Reels</button>
            <button className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Sports</button>
            <button className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Culture</button>
            <button className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Food</button>
            <button className='text-white font-semibold rounded-md p-2 hover:border border-white h-10 m-auto mr-2 ml-2'>Nation</button>
        </div>
        <div className='m-auto'>
            <input className='p-2 rounded-md' placeholder='Search' type='text'/>
        </div>
      </div>
    </div>
  )
}
