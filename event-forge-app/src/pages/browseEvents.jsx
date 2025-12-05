import React from 'react';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import "../styling/BrowseEvents.css"
import { useContext, useEffect } from 'react';
import { EventContext } from '../context/eventContext';
import { useNavigate } from 'react-router-dom';

export default function BrowseEvents() {
    const { events, setEvents } = useContext(EventContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/events")
        .then(res => res.json())
        .then(data => setEvents(data))
        .catch(err => console.error("Failed to load events:", err));
    }, []);

    const displayEvents = events.map(event =>
        <div>
            <EventCard key={event.id} event={event}/>
        </div>
    );

    const handleViewDetails = (id) => {
        navigate(`/event-page/${id}`);
    };

    return (
        <div className="browse-events">
            <header className="browsing-header"></header>
            <div className="search-container">
                <SearchBar />
            </div>
            <span> </span>
            <div className="display-events">
                {events.map(event => (
                    <EventCard key={event.id} event={event} onViewDetails={() => handleViewDetails(event.id)}/>
                ))}
            </div>
        </div>
    );


}