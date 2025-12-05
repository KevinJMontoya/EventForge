
export default function Ticket(){

    const Ticket = {
        1 : {
            eventID: 2,
            ticketID: 1,
            type: "General Admission",
            quantity: 100,
            price: 50
        },
        2 : {
            eventID: 3,
            ticketID: 2,
            type: "General Admission",
            quantity: 100,
            price: 50
        }
        
    };
    
    const [ticket, setTicket] = useState({
            eventID: null,
            ticketID: null,
            type: "",
            quantity: "",
            price: ""
    });

    return (
        <div className="ticket">
            <p>Event ID: {props.eventID}</p>
            <p>Ticket ID: {props.ticketID}</p>
            <p>Type: {props.ticketType}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

Ticket.propTypes 