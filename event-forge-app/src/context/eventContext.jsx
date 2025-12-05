import { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/events") // using your mockData.json
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded events:", data);
        setEvents(data);
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
        // fallback mock data if backend not ready
        setEvents([
          {
            id: 1,
            title: "Mock Event",
            date: "2025-12-01",
            startTime: "10:00",
            endTime: "12:00",
            location: "Ottawa, ON",
            organizer: "MockOrg",
            ticketsAvailable: 100,
          },
        ]);
      });
  }, []);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
