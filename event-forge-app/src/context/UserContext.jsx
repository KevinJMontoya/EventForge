import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("currentUser");
        return stored ? JSON.parse(stored) : null;
    });

    const [users, setUsers] = useState([]);

    // Fetch all users once when app starts
    useEffect(() => {
        //fetch("http://localhost:3001/api/users") 
        fetch("http://localhost:3000/users")  // -----------> Fetch From Mock Server
            .then((res) => res.json())
            .then((data) => {
                setUsers(data); // store in context
                console.log("Loaded users:", data);
            })
            .catch((err) => console.error("Failed to load users:", err));
    }, []);

    // Save user to localStorage whenever it changes
    useEffect(() => {
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [user]);

     // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        localStorage.removeItem("token");
    };

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};