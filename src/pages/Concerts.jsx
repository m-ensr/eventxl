
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Concerts() {
  const [concertData, setConcertData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/events'); 
        if (!response.data) {
          throw new Error('No data received');
        }
        const concertEventData = response.data.filter(event => event.category === 'music');
        
        setConcertData(concertEventData);
      } catch (error) {
        console.error('Error fetching concert data:', error.message);
        setError('An error occurred while fetching concert data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        concertData && concertData.length > 0 ? (
          <div>
            <h1>Title: {concertData[0].title}</h1>
            <p>Detail: {concertData[0].detail}</p>
            <img src={concertData[0].imgURL1} alt={concertData[0].title} />
          </div>
        ) : (
          <p>No concert data available.</p>
        )
      )}
    </div>
  );
}

export default Concerts;
