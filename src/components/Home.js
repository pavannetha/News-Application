import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {doc, setDoc} from "firebase/firestore"
import {database} from "../firebase/setup"

export default function Home() {

  const [news,setNews] = useState([])

  // console.log(news)

  const addnews = async(data) => {
    const newsDoc = doc(database,'News',`${data.url.substr(-10,10)}`)
    try{
      await setDoc(newsDoc,{
        title:data.title,description:data.description
      })
    }
    catch(err){
      console.error(err)
    }
  }

    const getNews = () => {
        fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7748d4236a6747648d7f151895c5795a")
        .then(res => res.json())
        .then(json => setNews(json.articles))
    }
    useEffect(() => {
        getNews()
    },[news])

    // console.log(news)

  return (
    
    <div className='mt-10 p-5 ml-6 mr-6 grid grid-cols-4 gap-4'>
      {news.map((data)=> {
        return <>
        <Link onClick={() => addnews(data)} to="/details" state={{data:data}}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className ="w-full" src={data.urlToImage} alt=" in the mountains"/>
        <div className ="px-6 py-4">
        <div className ="font-bold text-xl mb-2">{data.title}</div>
        <p className ="text-gray-700 text-base">
        {data.content}
        </p>
        </div>
        </div>
        </Link>
        </>
      })}
    </div>
  )
}
