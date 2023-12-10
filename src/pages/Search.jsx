import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const EventList = ({ events, searchTerm, setSearchTerm }) => {
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
    <form style={{ display: 'flex', alignItems: 'center', padding: 50 }}>
        <TextField
          id="search-bar"
          className="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          label="Search events"
          variant="outlined"
          size="medium" 
          style={{ width: '1000px' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "red" }} />
        </IconButton>
      </form>
      <EventList events={events} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Search;
