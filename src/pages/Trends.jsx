import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

function Trends() {
  const [trendsData, setTrendsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/events');
        if (!response.data) {
          throw new Error('No data received');
        }
        const trendsEventData = response.data.filter(event => event.popularity === "1");
        
        setTrendsData(trendsEventData);
      } catch (error) {
        console.error('Error fetching trends data:', error.message);
        setError('An error occurred while fetching trends data.');
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        trendsData && trendsData.length > 0 ? (
          <div className="page">
            {trendsData.map((event, index) => (
              <div className='card' key={index}>
                <img className='fill' src={event.imgURL1} alt={event.name} />
                <div className="container">
                  <h1>{event.name}</h1>
                </div>
              </div>
            ))}
          </div>
        ) 
        : (
          <p>No trends data available.</p>
        )
      )}
    </div>
  );
}

export default Trends;
