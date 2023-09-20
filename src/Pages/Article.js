import React, { useState, useEffect } from 'react';
import api from '../api/userApi'

const Article = () => {
  const [recommendedArticles, setRecommendedArticles] = useState([]);

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('token');

    // Check if the token exists
    if (!token) {
      // Handle the case where the user is not authenticated
      console.error('User is not authenticated');
      return;
    }

    // Set up headers with the token for authentication
    const headers = {
      Authorization: `Bearer ${token}`,
    };

   
    api.get('/recommended-articles', { headers }).then((response) => {
      console.log(response.data)
      setRecommendedArticles(response.data.recommendedArticles);
    });
  }, []);


  return (
    <div>
      <h2 className='text-center text-bg-secondary py-3'>Recommended Articles</h2>

      <div className="row justify-content-center mb-5">
        <div className="col-md-5">
          <div className="card border-secondary">
            <div className="card-body">
              {recommendedArticles.map((article) => (
                <div key={article.id} >
                  <h5 className='text-center'>{article.title}</h5>
                  <p className='text-center text-danger'>{article.category}</p>
                  <p className='text-center'>{article.description}</p>
                  
                  <div className="d-flex justify-content-center align-items-center">
                    <a href={article.url} className="btn btn-primary">Learn more</a>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>




    </div>
  )
}

export default Article