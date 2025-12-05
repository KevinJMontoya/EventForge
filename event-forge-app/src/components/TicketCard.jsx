import QuantitySelector from "./QuantitySelector";
import '../styling/TicketCard.css';
import { useState } from "react";
import { EventContext } from "../context/eventContext";
import { useContext } from "react";


export default function TicketCard({ticketId, eventId, ticketType, quantityAvailable, price, salesStartDate, salesEndDate}){
    const { selectedEvent } = useContext(EventContext);                   
    const [quantity, setQuantity] = useState(1);

    const [ticket, setTicket] = useState({
        ticketId, 
        eventId, 
        ticketType, 
        quantityAvailable,
        price,
        salesStartDate,
        salesEndDate
    });

    return (
        <div className="ticket-card-container" >
            
            <div className="ticket-card-type-div">
                <p>{ticket.ticketType}</p>
                <div className="quantity-selector"><QuantitySelector /></div>
            </div>

            <div className="ticket-card-price-div">
                <h2 className="ticket-price">Price: CA${ticket.price}</h2>
                <p className="end-date">Sales end on: {ticket.salesEndDate}</p>
            </div>
            
        </div>
    )
}