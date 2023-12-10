import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@mui/material";
import "./Style.css";

const EventList = ({ events }) => {
  const filteredEvents = events.filter(
    (event) => event.category.toLowerCase() === "festival"
  );

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

const Festivals = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="page-container">
      <EventList events={events} />
    </div>
  );
};

export default Festivals;
