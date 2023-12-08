import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import axios from 'axios';

function App() {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/events');
        setEventData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      }
    };

    fetchEventData();
  }, []); // Boş bağımlılık dizisi sayesinde yalnızca bir kere çağrılır

  return (
    <div>
      <Header />
      <div className="app">
        {error ? (
          <p>{error}</p>
        ) : (
          eventData && eventData.length > 0 && (
            <div>
              <h1>Title: {eventData[0].title}</h1>
              <p>Detail: {eventData[0].detail}</p>
              <img src={eventData[0].imgURL1} alt={eventData[0].title} />
            </div>
          )
        )}
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
