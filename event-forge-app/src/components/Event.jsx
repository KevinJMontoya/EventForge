
export default function Event({id, title, date, startTime, endTime, location, description, category, eventImageURL}){

    const[eventDetails, setEventDetails] = useState({
        id: null,
        title: "",
        date: "",
        startTime: "",
        endTime: "",
        location: "",
        description: "",
        category: "",
        eventImage: "",  //png or jpg expected
        organizer: ""
    });


    return(
        <div className="event">
            <p>Event ID: {props.eventID}</p>
            <p>Event Name: {props.eventName}</p>
            <p>Date: {props.date}</p>
            <p>Start Time: {props.startTime}</p>
            <p>End Time: {props.endTime}</p>
            <p>Location: {props.location}</p>
            <p>Description: {props.description}</p>
            <p>Category: {props.category}</p>
            <p>Organizer: {props.organizer}</p>
            <p>Image URL: {props.eventImage}</p>
        </div>
    )
}

