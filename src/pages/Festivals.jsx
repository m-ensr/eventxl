import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'

function Festivals() {
  const [festivalData, setFestivalData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/events'); 
        if (!response.data) {
          throw new Error('No data received');
        }
        const festivalEventData = response.data.filter(event => event.category === 'festival');
        
        setFestivalData(festivalEventData);
      } catch (error) {
        console.error('Error fetching concert data:', error.message);
        setError('An error occurred while fetching festival data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    {error ? (
      <p>{error}</p>
    ) : (
      festivalData && festivalData.length > 0 ? (
        <div className="page">

        <div className='card'>
          <img className='fill' src={festivalData[0].imgURL1} alt={festivalData[0].name} />
          <div className="container">
          <h1>{festivalData[0].name}</h1>
          <p>{festivalData[0].address}</p>
          <p>{festivalData[0].sDate}</p>
          <p>{festivalData[0].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={festivalData[1].imgURL1} alt={festivalData[1].name} />
          <div className="container">
          <h1>{festivalData[1].name}</h1>
          <p>{festivalData[1].address}</p>
          <p>{festivalData[1].sDate}</p>
          <p>{festivalData[1].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={festivalData[2].imgURL1} alt={festivalData[2].name} />
          <div className="container">
          <h1>{festivalData[2].name}</h1>
          <p>{festivalData[2].address}</p>
          <p>{festivalData[2].sDate}</p>
          <p>{festivalData[2].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={festivalData[3].imgURL1} alt={festivalData[3].name} />
          <div className="container">
          <h1>{festivalData[3].name}</h1>
          <p>{festivalData[3].address}</p>
          <p>{festivalData[3].sDate}</p>
          <p>{festivalData[3].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={festivalData[4].imgURL1} alt={festivalData[4].name} />
          <div className="container">
          <h1>{festivalData[4].name}</h1>
          <p>{festivalData[4].address}</p>
          <p>{festivalData[4].sDate}</p>
          <p>{festivalData[4].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={festivalData[5].imgURL1} alt={festivalData[5].name} />
          <div className="container">
          <h1>{festivalData[5].name}</h1>
          <p>{festivalData[5].address}</p>
          <p>{festivalData[5].sDate}</p>
          <p>{festivalData[5].place}</p>
          </div>
        </div>

      
        
        </div>
      ) 
      : (
        <p>No concert data available.</p>
      )
    )}
  </div>
  )
}

export default Festivals