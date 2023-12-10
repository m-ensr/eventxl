
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'

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
          <div className="page">

          <div className='card'>
            <img className='fill' src={theatreData[0].imgURL1} alt={theatreData[0].name} />
            <div className="container">
            <h1>{theatreData[0].name}</h1>
            <p>{theatreData[0].address}</p>
            <p>{theatreData[0].sDate}</p>
            <p>{theatreData[0].place}</p>
            </div>
          </div>
          <div className='card'>
            <img className='fill' src={theatreData[1].imgURL1} alt={theatreData[1].name} />
            <div className="container">
            <h3>{theatreData[1].name}</h3>
            <p>{theatreData[1].address}</p>
            <p>{theatreData[1].sDate}</p>
            <p>{theatreData[1].place}</p>
            </div>
          </div>
          <div className='card'>
            <img className='fill' src={theatreData[2].imgURL1} alt={theatreData[2].name} />
            <div className="container">
            <h1>{theatreData[2].name}</h1>
            <p>{theatreData[2].address}</p>
            <p>{theatreData[2].sDate}</p>
            <p>{theatreData[2].place}</p>
            </div>
          </div>
          <div className='card'>
            <img className='fill' src={theatreData[3].imgURL1} alt={theatreData[3].name} />
            <div className="container">
            <h1>{theatreData[3].name}</h1>
            <p>{theatreData[3].address}</p>
            <p>{theatreData[3].sDate}</p>
            <p>{theatreData[3].place}</p>
            </div>
          </div>
          <div className='card'>
            <img className='fill' src={theatreData[4].imgURL1} alt={theatreData[4].name} />
            <div className="container">
            <h2>{theatreData[4].name}</h2>
            <p>{theatreData[4].address}</p>
            <p>{theatreData[4].sDate}</p>
            <p>{theatreData[4].place}</p>
            </div>
          </div>
          <div className='card'>
            <img className='fill' src={theatreData[5].imgURL2} alt={theatreData[5].name} />
            <div className="container">
            <h3>{theatreData[5].name}</h3>
            <p>{theatreData[5].address}</p>
            <p>{theatreData[5].sDate}</p>
            <p>{theatreData[5].place}</p>
            </div>
          </div>
          <div className='card'>
            <img className='fill' src={theatreData[6].imgURL1} alt={theatreData[6].name} />
            <div className="container">
            <h3>{theatreData[6].name}</h3>
            <p>{theatreData[6].address}</p>
            <p>{theatreData[6].sDate}</p>
            <p>{theatreData[6].place}</p>
            </div>
          </div>





          </div>
        )
      )}
    </div>
  );
}

export default Theatres;
