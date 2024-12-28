import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {auth, database} from '../firebase/setup'

export default function Comments(props) {

  const [comments,setComments] = useState("")
  const [newsComments,setNewsComments] = useState([])

const addComments = async() => {
  const newsDoc = doc(database,"News",`${props.url.substr(-10,10)}`)
  const commentsRef = collection(newsDoc,"Comments")
  try{
    auth.currentUser && await addDoc(commentsRef,{
      comments:comments,
      name:auth.currentUser.displayName,
      profileImg:auth.currentUser.photoURL
    })
  }
  catch(err){
    console.error(err)
  }
}

const showComments = async() => {
  const newsDoc = doc(database,"News",`${props.url.substr(-10,10)}`)
  const commentsRef = collection(newsDoc,"Comments")
  try{
   const data = await getDocs(commentsRef)
   const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id:doc.id
   }))
   setNewsComments(filteredData)
  }
  catch(err){
    console.error(err)
  }
}

useEffect(() => {
  showComments()
})
// ,[newsComments]
  return (
    <div className='grid grid-rows-2'>
      <div className="mb-6 p-5">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
        Add Comment
      </label>
      <div className='flex'>
      <input onChange={(e) => setComments(e.target.value)} className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Comment"/>
      <button onClick={addComments} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
      </div>
      </div>
      <div className='h-2 p-4'>
        {newsComments.map((data) => {
            return <>
            <div className='flex'>
            <img src={data.profileImg} alt='..' className='rounded-full w-5 h-5'/>
            <h6 className='ml-2 text-xm text-slate-500'>{data.name.toUpperCase()}</h6>
            </div>
            <h6 className='ml-7'>{data.comments}</h6>
            </>
        })}
      </div>
    </div>
  )
}
