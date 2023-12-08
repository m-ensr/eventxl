
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Theatres() {
  const [theatreData, setTheatreData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/events'); 
        if (!response.data) {
          throw new Error('No data received');
        }

        setTheatreData(response.data);
      } catch (error) {
        console.error('Error fetching theatre data:', error.message);
        setError('An error occurred while fetching theatre data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        theatreData && theatreData.length > 0 && (
          <div>
            <h1>Title: {theatreData[0].title}</h1>
            <p>Detail: {theatreData[0].detail}</p>
            <img src={theatreData[0].imgURL1} alt={theatreData[0].title} />
          </div>
        )
      )}
    </div>
  );
}

export default Theatres;
