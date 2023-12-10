import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'

function Movies() {
  const [moviesData, setMoviesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/events'); 
        if (!response.data) {
          throw new Error('No data received');
        }
        const moviesEventData = response.data.filter(event => event.category === 'movies');
        
        setMoviesData(moviesEventData);
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
      moviesData && moviesData.length > 0 ? (
        <div className="page">

        <div className='card'>
          <img className='fill' src={moviesData[0].imgURL1} alt={moviesData[0].name} />
          <div className="container">
          <h2>{moviesData[0].name}</h2>
          <p>{moviesData[0].address}</p>
          <p>{moviesData[0].sDate}</p>
          <p>{moviesData[0].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[1].imgURL1} alt={moviesData[1].name} />
          <div className="container">
          <h1>{moviesData[1].name}</h1>
          <p>{moviesData[1].address}</p>
          <p>{moviesData[1].sDate}</p>
          <p>{moviesData[1].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[2].imgURL1} alt={moviesData[2].name} />
          <div className="container">
          <h3>{moviesData[2].name}</h3>
          <p>{moviesData[2].address}</p>
          <p>{moviesData[2].sDate}</p>
          <p>{moviesData[2].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[3].imgURL1} alt={moviesData[3].name} />
          <div className="container">
          <h1>{moviesData[3].name}</h1>
          <p>{moviesData[3].address}</p>
          <p>{moviesData[3].sDate}</p>
          <p>{moviesData[3].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[4].imgURL1} alt={moviesData[4].name} />
          <div className="container">
          <h1>{moviesData[4].name}</h1>
          <p>{moviesData[4].address}</p>
          <p>{moviesData[4].sDate}</p>
          <p>{moviesData[4].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[5].imgURL1} alt={moviesData[5].name} />
          <div className="container">
          <h2>{moviesData[5].name}</h2>
          <p>{moviesData[5].address}</p>
          <p>{moviesData[5].sDate}</p>
          <p>{moviesData[5].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[6].imgURL1} alt={moviesData[6].name} />
          <div className="container">
          <h5>{moviesData[6].name}</h5>
          <p>{moviesData[6].address}</p>
          <p>{moviesData[6].sDate}</p>
          <p>{moviesData[6].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[7].imgURL1} alt={moviesData[7].name} />
          <div className="container">
          <h2>{moviesData[7].name}</h2>
          <p>{moviesData[7].address}</p>
          <p>{moviesData[7].sDate}</p>
          <p>{moviesData[7].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[8].imgURL1} alt={moviesData[8].name} />
          <div className="container">
          <h1>{moviesData[8].name}</h1>
          <p>{moviesData[8].address}</p>
          <p>{moviesData[8].sDate}</p>
          <p>{moviesData[8].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[9].imgURL1} alt={moviesData[9].name} />
          <div className="container">
          <h1>{moviesData[9].name}</h1>
          <p>{moviesData[9].address}</p>
          <p>{moviesData[9].sDate}</p>
          <p>{moviesData[9].place}</p>
          </div>
        </div>
        <div className='card'>
          <img className='fill' src={moviesData[10].imgURL1} alt={moviesData[10].name} />
          <div className="container">
          <h2>{moviesData[10].name}</h2>
          <p>{moviesData[10].address}</p>
          <p>{moviesData[10].sDate}</p>
          <p>{moviesData[10].place}</p>
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

export default Movies