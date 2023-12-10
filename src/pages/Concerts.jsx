
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'

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
          <div className="page">

          <div className='card'>
            <img className='fill' src={concertData[0].imgURL1} alt={concertData[0].name} />
            <div className="container">
            <h1>{concertData[0].name}</h1>
            <p>{concertData[0].adres}</p>
            <p>{concertData[0].sDate}</p>
            <p>{concertData[0].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[1].imgURL1} alt={concertData[1].name} />
            <div className="container">
            <h1>{concertData[1].name}</h1>
            <p>{concertData[1].adres}</p>
            <p>{concertData[1].sDate}</p>
            <p>{concertData[1].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[2].imgURL1} alt={concertData[2].name} />
            <div className="container">
            <h1>{concertData[2].name}</h1>
            <p>{concertData[2].adres}</p>
            <p>{concertData[2].sDate}</p>
            <p>{concertData[2].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[3].imgURL1} alt={concertData[3].name} />
            <div className="container">
            <h1>{concertData[3].name}</h1>
            <p>{concertData[3].adres}</p>
            <p>{concertData[3].sDate}</p>
            <p>{concertData[3].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[4].imgURL1} alt={concertData[4].name} />
            <div className="container">
            <h1>{concertData[4].name}</h1>
            <p>{concertData[4].adres}</p>
            <p>{concertData[4].sDate}</p>
            <p>{concertData[4].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[5].imgURL1} alt={concertData[5].name} />
            <div className="container">
            <h1>{concertData[5].name}</h1>
            <p>{concertData[5].adres}</p>
            <p>{concertData[5].sDate}</p>
            <p>{concertData[5].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[6].imgURL1} alt={concertData[6].name} />
            <div className="container">
            <h1>{concertData[6].name}</h1>
            <p>{concertData[6].adres}</p>
            <p>{concertData[6].sDate}</p>
            <p>{concertData[6].mekan}</p>
            </div>
          </div>

          <div className='card'>
            <img className='fill' src={concertData[7].imgURL1} alt={concertData[7].name} />
            <div className="container">
            <h1>{concertData[7].name}</h1>
            <p>{concertData[7].adres}</p>
            <p>{concertData[7].sDate}</p>
            <p>{concertData[7].mekan}</p>
            </div>
          </div>
          
          
          
          </div>
        ) 
        : (
          <p>No concert data available.</p>
        )
      )}
    </div>
  );
}

export default Concerts;
