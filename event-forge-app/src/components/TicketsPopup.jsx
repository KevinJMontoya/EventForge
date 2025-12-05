import { EventContext } from '../context/eventContext';
import TicketCard from './TicketCard';

export default function TicketsPopup() {
    const { selectedEvent } = useContext(EventContext);

    if (!selectedEvent) return <p>No event selected.</p>;

    return(
        <div className="popup-container">
            <div className="popup-header">
                <image src={selectedEvent.eventImageURL} />
            </div>
            <div>
                <h1>Tickets for {selectedEvent.title}</h1>
                {selectedEvent.tickets.map(t => (
                    <div className="ticket-card"><TicketCard key={t.ticketId} ticket={t}/></div>
                ))}
            </div>
    
        </div>
    );
}