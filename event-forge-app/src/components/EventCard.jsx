import React from "react";
import "../styling/EventCard.css"
import { useNavigate } from "react-router-dom";
import cyclingImage from "../assets/cyclingImage.jpg";
import { useState } from "react";
import { EventContext } from '../context/eventContext';
import { useContext } from "react";

export default function EventCard({event, onViewDetails}){
    if (!event) {
        return <p>Event not found.</p>;
    }
    
    const { events, setEvents } = useContext(EventContext);

    return (
       <div className="event-card" key={event.id}>
            <img src={event.imageURL} alt={event.imageURL} className="event-card-image" /> 
            <aside>
                <div className="event-card-content">
                    <h2 className="event-card-title">{event.title}</h2>
                    <p className="event-card-date"><span className="icon">📅</span><strong>Date:</strong> {event.date}</p>
                    <p className="event-card-location"><span className="icon">📍</span><strong>Location:</strong> {event.location}</p>
                    <p className="event-card-description">{event.description}</p>
                    
                    <button className="event-card-button" onClick={onViewDetails}>View Details</button>
                </div>
            </aside>
       </div>
    )
}

