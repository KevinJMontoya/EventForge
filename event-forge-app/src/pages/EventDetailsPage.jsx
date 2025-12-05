import React from "react";
import { useNavigate } from "react-router-dom";
import TicketCard from "../components/TicketCard.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../context/eventContext.jsx";

export default function EventDetails({}){
    const { id } = useParams();
    const { events } = useContext(EventContext);

    const event = events.find((ev) => ev.id === parseInt(id));

    if (!event) {
        return <p>Event not found.</p>;
    }

    const handleGetTickets = () => {
        
    }

    const handleGoBack = () => {
        navigate('/');
    }

    const pictureStyle = {
            backgroundImage: `url(${event.imageURL})`,
            minHeight: '50vh',
    
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };


    return (
        <div className="event-details" style={{ margin: "24px auto", padding: 24, border: "1px solid #e6e6e6", borderRadius: 8 }}>
            <div className="event-picture" style={pictureStyle}></div>

            <div className="event-detail-content">
                <h1 className="event-detail-title">{event.title}</h1>
                <h3 className="event-detail-organizer">By: {event.organizer}</h3>
                <h3 className="event-detail-location">{event.location}</h3>
                <h3 className="event-detail-date">{event.date}</h3>
                <h3 className="event-detail-time">{event.startTime} to {event.endTime}</h3>

            </div>

            
            <div className="event-details-tickets">
                <h1>Get Tickets</h1>
                <ul>
                    <TicketCard />
                </ul>
            </div>

            

            <Link className="go-back">Back to Events</Link>

        </div>
    );

    /* const[eventDetails, setEventDetails] = useState({
        title: "Indie Rock Night",
        date: "09-12-2025",
        startTime: "",
        endTime: "",
        location: "",
        description: "",
        category: "",
        eventImage: "",  //png or jpg expected
        organizer: ""
    });*/

    /*<h2>----------------------------------------------------------------</h2>

                <h1>Description</h1>
                <p className="event-detail-description">{event.description}</p>

                <h3 className="event-detail-category"><strong>Category:</strong>{event.category}</h3>*/

}