import React, { useState, useEffect } from 'react';
import api from '../api/userApi'
import { useNavigate, Link } from 'react-router-dom';


const ArticleSaving = () => {
  
  const [savedArticles, setSavedArticles] = useState([]);

 
  useEffect(() => {
    
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
   
    api.get('/save-article', { headers }).then((response) => {
      console.log(response.data)
      setSavedArticles(response.data.savedArticles);
    });
  }, []);
  // Function to remove a saved article
  const removeSavedArticle = (id) => {

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
    

    console.log('Deleting article with ID:', id);
    api.delete(`/delete-article/${id}`, { headers }).then(() => {
      setSavedArticles(savedArticles.filter((article) => article._id !== id));
    });
  };


  return (
    <div>
     
      <h2 className='text-center text-bg-secondary py-3'>User Articles</h2>
      <div className="App mt-3 mb-3" >
        <Link to="/add-article"><button className='btn btn-primary' >Add Article</button></Link>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-md-5 mt-4 mb-4">
          {savedArticles.map((article) => (
            <div className="card border-secondary mt-4 mb-4" key={article.id}>
              <div className="card-body mt-3 mb-3">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                  <button className="btn btn-danger" onClick={() => removeSavedArticle(article._id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleSaving