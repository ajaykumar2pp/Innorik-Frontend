import React, { useEffect, useState } from 'react';
import './InterestSelection.css';
import api from '../api/userApi'

const InterestSelection = () => {

  const [selectedInterests, setSelectedInterests] = useState([]);

  const [availableInterests, setAvailableInterests] = useState([]);

  
  const interestCategories = [
    { id: 'technology', label: 'Technology' },
    { id: 'sports', label: 'Sports' },
    { id: 'politics', label: 'Politics' },
    { id: 'health', label: 'Health' },
  ];


  useEffect(() => {
    // Retrieve the JWT token from local storage
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
    api.get('/user/interests', { headers }).then((response) => {
      console.log(response.data)
      setAvailableInterests(response.data);
    })
    .catch((error) => {
      console.error('Error fetching interests:', error);
    });
  }, []);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the selected interest to the list
      setSelectedInterests([...selectedInterests, value]);
    } else {
      // Remove the unselected interest from the list
      setSelectedInterests(selectedInterests.filter((interest) => interest !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    api.post('/user/interests', { interests: selectedInterests })
      .then(() => {
        console.log('Selected Interests:', selectedInterests);
        alert('Interests updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating interests:', error);
        alert('Failed to update interests. Please try again later.');
      });
  };

  const handleReset = () => {
    setSelectedInterests([]);
  };


  return (
    <div>
      <h2 className='text-center mt-4'>Select Your Interests</h2>
      <form onSubmit={handleSubmit}>
        {interestCategories.map((category) => (
          <div key={category.id} className='d-flex  justify-content-center  '>
            <label className='h3 me-5'>
              <input
                type="checkbox"
                name="interest"
                value={category.id}
                checked={selectedInterests.includes(category.id)}
                onChange={handleCheckboxChange}
              />{' '}
              {category.label}
            </label>
          </div>
        ))}
        <div className='d-flex justify-content-center mt-4'>
          <button className='btn btn-primary px-5 me-5' type="submit">Update</button>
          <button className='btn btn-success px-5' type=" button" onClick={handleReset}>Reset</button>
        </div>

      </form>
    </div>
  )
}

export default InterestSelection