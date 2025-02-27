import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { database } from '../firebase/setup';

export default function Home() {
  const [news, setNews] = useState([]);

  const addNews = async (data) => {
    const newsDoc = doc(database, 'News', `${data.url.substr(-10, 10)}`);
    try {
      await setDoc(newsDoc, {
        title: data.title,
        description: data.description
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7748d4236a6747648d7f151895c5795a');
      const json = await response.json();
      setNews(json.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    getNews();
  }, []); // Empty dependency array to prevent infinite loop

  return (
    <div className='mt-10 p-5 ml-6 mr-6 grid grid-cols-4 gap-4'>
      {news.map((data, index) => (
        <Link key={data.url} onClick={() => addNews(data)} to="/details" state={{ data: data }}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={data.urlToImage} alt="news" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              <p className="text-gray-700 text-base">
                {data.content}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}