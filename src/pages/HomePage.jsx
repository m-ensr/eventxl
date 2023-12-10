import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, IconButton, Card, CardContent } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Style.css";


const EventList = ({ events, searchTerm }) => { //This is used for the detection of Turkish characters.
  const normalizeString = (str) =>
    str
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, " ")
      .trim();

  const normalizedSearchTerm = normalizeString(searchTerm);

  const filteredEvents = events.filter((event) => {
    const normalizedEventName = normalizeString(event.name);
    const normalizedEventAddress = normalizeString(event.address);

    return (
      normalizedEventName.includes(normalizedSearchTerm) ||
      normalizedEventAddress.includes(normalizedSearchTerm)
    );
  });

  return (
    <div className="card-container">
      {filteredEvents.map((event) => (
        <a href={`#event-${event.id}`} key={event.id} className="event-card">
          <Card>
            <img
              src={event.imgURL1}
              alt={event.name}
              className="event-card-image"
            />
            <CardContent className="event-card-content">
              <h3 className="event-title">{event.name}</h3>
              <p className="event-address">{event.address}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="page-container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="search-bar"
          className="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          label="İsme veya şehre göre ara"
          variant="outlined"
          size="medium"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "#49108B" }} />
        </IconButton>
      </form>
      <EventList events={events} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
