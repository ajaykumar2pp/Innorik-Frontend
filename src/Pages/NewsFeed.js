import React, { useEffect, useState } from 'react';
import api from '../api/userApi'

const NewsFeed = () => {

  const [userInterests, setUserInterests] = useState([]);

  const [newsArticles, setNewsArticles] = useState([]);


  useEffect(() => {

    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('token');

  
    if (!token) {
      // Handle the case where the user is not authenticated
      console.error('User is not authenticated');
      return;
    }

    
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    api.get('/user/interests',{headers}).then((response) => {
      console.log(response.data)
      setUserInterests(response.data.newsArticles);
    });
  }, []);

  
  useEffect(() => {
  
    const token = localStorage.getItem('token');

    // Check if the token exists
    if (!token) {
      // Handle the case where the user is not authenticated
      console.error('User is not authenticated');
      return;
    }

   
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    api.get(`/news-feed?interests=${userInterests.join(',')}`,{headers}).then((response) => {
      setNewsArticles(response.data);
    });
  }, [userInterests]);
  return (
    <div>
      <h2 className='text-center text-bg-secondary'>News Feed</h2>
      <ul>
        {newsArticles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsFeed