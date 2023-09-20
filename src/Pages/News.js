import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/userApi';

const News = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(''); 
  const [url, setUrl] = useState(''); 

  const navigate =useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'category') {
      setCategory(value); 
    } else if (name === 'url') {
      setUrl(value); 
    }
  };

  const handleSave = () => {
  
    const token = localStorage.getItem('token');

   
    if (!token) {
      console.error('User is not authenticated');
      return;
    }

    // Set up headers with the token for authentication
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const articleData = {
      title: title,
      description: description,
      category: category, 
      url: url, 
    };

    api
      .post('/save-article', articleData, { headers })
      .then(() => {
        alert('Article Posted');
         navigate("/save-article");
        setTitle('');
        setDescription('');
        setCategory('');
        setUrl('');
      })
      .catch((error) => {
        console.error('Error posting article:', error);
      });
  };

  return (
    <div className='mb-5'>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <div className="App mt-3 mb-3">
          <h1 className="text-bg-secondary py-2">Add Article</h1>
          <Link to="/news">
            <button className="btn btn-primary">Home Page</button>
          </Link>
        </div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="text-primary">Add Article</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="form-group">
              <label className="text-primary">Title</label>
              <input
                type="text"
                className="form-control mt-2 mb-3"
                value={title}
                onChange={handleChange}
                name="title"
              />
            </div>
            <div className="form-group">
              <label className="text-primary">Description</label>
              <textarea
                rows="3"
                className="form-control mt-2 mb-3"
                value={description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
            <div className="form-group">
              <label className="text-primary">Category</label>
              <input
                type="text"
                className="form-control mt-2 mb-3"
                value={category}
                onChange={handleChange}
                name="category"
              />
            </div>
            <div className="form-group">
              <label className="text-primary">URL</label>
              <input
                type="text"
                className="form-control mt-2 mb-3"
                value={url}
                onChange={handleChange}
                name="url"
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleSave}>
              Add Article
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default News;
