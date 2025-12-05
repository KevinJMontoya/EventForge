import { use } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * DynamicForm component
 * - Adds a new input field each time the "Add Field" button is clicked
 * - Maintains form state in an array
 */
export default function CreateEvent(){
    const navigate = useNavigate();

    // Event details state
    const[eventDetails, setEventDetails] = useState({
        title: "",
        date: "",
        startTime: "",
        endTime: "",
        location: "",
        description: "",
        category: ""
    });

    // Ticket state
    const [ticket, setTicket] = useState({
        ticketID: null,
        type: "",
        quantity: "",
        price: ""
    });

    const EventTickets = [...ticket];

    // Handle input change for dynamic fields
    const handleInputChange = (index, eventHandle) => {
        EventTickets[index].value = eventHandle.target.value;
        setEventDetails(info);
    }

    // Logic to submit form data to backend or API would go here
    // After successful submission, redirect to Event Details page

    const addTicket = () => {
        setEventDetails([...eventDetails, { value: "" }]);
    }
    const handleSubmit = (eventDetails) => {
        eventDetails.preventDefault();
        console.log("Event Data Added:", eventDetails.map(i => i.value));
        alert("Event Created Successfully!");
        navigate('/EventDetails');   
        
        /*Add logic to pass created event ID or details to Event Details page!!!!!!!!!!!!!*/

    }   
        
    return (
        <div className="createEventCard" style={{ maxWidth: 600, margin: "24px auto", padding: 24, border: "1px solid #e6e6e6", borderRadius: 8 }}>
            <form className="createEventForm" aria-label="create event form" >
                <h2 style={{ marginBottom: 16 }}>Create New Event</h2>
                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="title" style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                        Event Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        placeholder="Enter event name or title"
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="date" style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                        Date   
                    </label>
                    <input
                        id="date"   
                        name="date"
                        type="date"
                        required
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }} 
                    />
                </div>
                <div style={{ marginBottom: 12 }}>  
                    <label htmlFor="startTime" style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                        Start Time
                    </label> 
                    <input  
                        id="startTime"
                        name="startTime"
                        type="time"
                        required
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                    />
                </div>
                <div style={{ marginBottom: 12 }}>  
                    <label htmlFor="endTime" style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                        End Time
                    </label> 
                    <input  
                        id="endTime"
                        name="endTime"
                        type="time"
                        required
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                    />
                </div>
                <div>
                    <label htmlFor="location" style={{ display: "block", fontSize: 14, marginBottom: 6, marginTop: 12 }}>
                        Location
                    </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        placeholder="Enter event location or venue"
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                    />
                </div>
                <div style={{ marginBottom: 12 }}>  
                    <label htmlFor="description" style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                        Description
                    </label> 
                    <input  
                        id="description"
                        name="description"
                        type="text"
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                    />
                </div>
                <div>
                    <label htmlFor="category" style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                        Category
                    </label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                    />
                </div>

                <div>
                    <h1>Add Tickets</h1>

                    <button type="button" onClick={addTicket} style={{ marginTop: 12, padding: '8px 12px', cursor: 'pointer' }}>
                        Add Another Ticket Type
                    </button>  
                    <div>              
                    
                    </div>
                </div>  
                <button className="submitBTN"
                            type="submit"
                            style={{
                            width: "100%",
                            padding: "10px 12px",
                            background: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: 4,
                            fontSize: 15,
                            cursor: "pointer"
                        }}>
                                Submit
                        </button>
            </form>
        </div>
    );
}

/* {EventTickets.map(ticket, index) => (
                        <div key={index} style={{ marginBottom: 12 }}>
                            <label htmlFor={`ticketType_${index}`} style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                                Ticket Type
                            </label>
                            <input
                                id={`ticketType_${index}`}
                                name="ticketType"
                                type="text"
                                required
                                placeholder="Enter ticket type (e.g., General Admission, VIP)"
                                style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <label htmlFor={`quantity_${index}`} style={{ display: "block", fontSize: 14, marginBottom: 6, marginTop: 12 }}>
                                Quantity
                            </label>
                            <input
                                id={`quantity_${index}`}
                                name="quantity"
                                type="number"
                                required
                                placeholder="Enter quantity of tickets"
                                style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <label htmlFor={`price_${index}`} style={{ display: "block", fontSize: 14, marginBottom: 6, marginTop: 12 }}>
                                Price
                            </label>
                            <input
                                id={`price_${index}`}
                                name="price"
                                type="number"
                                required
                                placeholder="Enter price per ticket"    
                                style={{ width: "100%", padding: "8px 10px", fontSize: 14, boxSizing: "border-box" }}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </div>   
                    )} */